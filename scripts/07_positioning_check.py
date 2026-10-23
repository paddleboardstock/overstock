#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
07_positioning_check.py —— 品牌定位一致性检查

公司画像（客户确认）：
    RIB Boats, Inflatable Boats, SUP Boards Manufacturer & OEM/ODM Solution

本脚本检查线上站点的实际表述是否与画像一致，五项检查：

  [P1] 三条产品线落地页是否存在且可索引
  [P2] 首页 title / H1 / description 是否含全部必需词（RIB 是重灾区）
  [P3] schema 里的实体身份是否统一（现有 4 个节点给出 4 套互相矛盾的身份）
  [P4] 是否残留 B2C / 泛化表述（画像是 B2B 制造商）
  [P5] 三条产品线的措辞与顺序是否全站一致

用法：
    python3 scripts/07_positioning_check.py
    python3 scripts/07_positioning_check.py --strict   # 有问题时 exit 1，可进 CI
"""

from __future__ import annotations
import argparse, json, os, re, sys, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

BASE = "https://aquafarer.com"
UA = "Mozilla/5.0 (compatible; AquafarerPositioningCheck/1.0)"
HERE = os.path.dirname(os.path.abspath(__file__))
CFG = os.path.join(HERE, "..", "src", "config", "positioning.json")

ERRORS: list[str] = []
WARNS: list[str] = []


def err(code, msg):
    ERRORS.append(f"✗ [{code}] {msg}")


def warn(code, msg):
    WARNS.append(f"! [{code}] {msg}")


def fetch(path: str):
    url = path if path.startswith("http") else BASE + path
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=40) as r:
            return r.status, r.read().decode("utf-8", "ignore")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception:
        return 0, ""


def one(pat, s, d=""):
    m = re.search(pat, s, re.S)
    return re.sub(r"\s+", " ", m.group(1)).strip() if m else d


def page(path: str) -> dict:
    st, h = fetch(path)
    if not h:
        return {"path": path, "status": st, "ok": False}
    h1 = [re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", x)).strip()
          for x in re.findall(r"<h1[^>]*>(.*?)</h1>", h, re.S)]
    return {
        "path": path, "status": st, "ok": True, "html": h,
        "title": one(r"<title[^>]*>(.*?)</title>", h),
        "desc": one(r'name="description"\s+content="([^"]*)"', h),
        "canonical": one(r'rel="canonical"\s+href="([^"]*)"', h),
        "robots": one(r'name="robots"\s+content="([^"]*)"', h),
        "h1": h1,
    }


def schema_nodes(html: str) -> list[dict]:
    out = []
    for b in re.findall(r"application/ld\+json[^>]*>(.*?)</script>", html, re.S):
        try:
            d = json.loads(b)
        except Exception:
            continue
        items = d.get("@graph") if isinstance(d, dict) and "@graph" in d else [d]
        for n in items if isinstance(items, list) else [items]:
            if isinstance(n, dict):
                out.append(n)
    return out


def check_pillars(cfg):
    """[P1] 三条产品线是否各有一个可索引的落地页。"""
    print("\n[P1] 产品线落地页")
    for line in cfg["productLines"]:
        p = page(line["path"])
        name = line["name"]
        if not p["ok"]:
            err("P1", f"{name} 落地页 {line['path']} 返回 {p['status']} —— "
                      f"画像里的三条主产品线之一没有落地页")
            print(f"   ✗ {name:20} {line['path']:22} HTTP {p['status']}")
            continue
        canon = p["canonical"].replace(BASE, "").rstrip("/") + "/"
        want = line["path"]
        if canon != want:
            err("P1", f"{name} 页 {want} 的 canonical 指向 {canon}，"
                      f"等于主动放弃这个落地页的排名资格")
            print(f"   ✗ {name:20} {want:22} canonical→{canon}")
        elif "noindex" in p["robots"]:
            err("P1", f"{name} 页 {want} 是 noindex")
            print(f"   ✗ {name:20} {want:22} noindex")
        else:
            print(f"   ✓ {name:20} {want:22} 可索引")


def check_service(cfg):
    """OEM/ODM 服务页路径。"""
    print("\n[P1] OEM/ODM 服务页")
    s = cfg["service"]
    p = page(s["path"])
    if not p["ok"]:
        cur = page(s["currentPath"])
        if cur["ok"]:
            warn("P1", f"主路径 {s['path']} 不存在（{p['status']}），"
                       f"现用 {s['currentPath']}。采购方搜的是 'oem odm'，"
                       f"blueprint 这个 slug 没有搜索量，建议新建主路径并 301")
            print(f"   ! {s['path']} → {p['status']}；现用 {s['currentPath']}")
            # 顺带查断字 bug
            for h in cur["h1"]:
                if re.search(r"[a-z][A-Z]", h.replace(" ", "\x00").replace("\x00", " ")) and re.search(r"[a-z](?=[A-Z])", h):
                    if not re.search(r"\b(OEM|ODM|SUP|RIB|PSI|CE)\b", h):
                        err("P1", f"{s['currentPath']} 的 H1 存在断字：'{h}'（字符串管道问题）")
                        print(f"   ✗ H1 断字：{h}")
        else:
            err("P1", f"OEM/ODM 服务页缺失：{s['path']} 与 {s['currentPath']} 都不可达")
    else:
        print(f"   ✓ {s['path']} 可访问")


def check_home_terms(cfg, home):
    """[P2] 首页三处关键位置是否含必需词。"""
    print("\n[P2] 首页必需词")
    req = cfg["requiredTerms"]["home"]
    fields = {"title": home["title"], "H1": " ".join(home["h1"]), "description": home["desc"]}
    for fname, val in fields.items():
        missing = [t for t in req if not re.search(re.escape(t), val, re.I)]
        if missing:
            err("P2", f"首页 {fname} 缺少必需词 {missing}\n        当前值：{val}")
            print(f"   ✗ {fname:12} 缺 {missing}")
        else:
            print(f"   ✓ {fname:12} 完整")

    # RIB 单独统计：正文里到处都是，但身份表述里没有
    rib_body = len(re.findall(r"\bRIB\b", home["html"]))
    rib_ident = sum(1 for v in fields.values() if re.search(r"\bRIB\b", v))
    if rib_body > 50 and rib_ident == 0:
        err("P2", f"RIB 在首页正文出现 {rib_body} 次，但 title / H1 / description "
                  f"三处身份表述中一次都没有 —— 搜索引擎只会认为你做充气艇和 SUP")
        print(f"   ✗ RIB 正文 {rib_body} 次，身份表述 0 次")


def check_schema_identity(cfg, home):
    """[P3] schema 实体身份是否统一。"""
    print("\n[P3] schema 实体身份")
    nodes = schema_nodes(home["html"])
    idents, alts, slogans = {}, {}, {}
    org_types = ("Organization", "ManufacturingBusiness", "Brand", "WebSite")
    for n in nodes:
        raw = n.get("@type")
        # schema.org 允许 @type 为数组（如 ['Organization','ManufacturingBusiness']，见 utils/schema-graph.ts）。
        # 任一类型命中即视为组织级节点；标签用 + 连接仅作展示。
        types = raw if isinstance(raw, list) else ([raw] if raw else [])
        t = "+".join(str(x) for x in types)
        if any(x in org_types for x in types):
            if n.get("description"):
                idents.setdefault(str(n["description"]).strip(), []).append(t)
            if n.get("alternateName"):
                alts.setdefault(str(n["alternateName"]).strip(), []).append(t)
            if n.get("slogan"):
                slogans.setdefault(str(n["slogan"]).strip(), []).append(t)

    if len(idents) > 1:
        err("P3", f"首页存在 {len(idents)} 套互不相同的实体描述，AI 引擎无法归并成一个实体：")
        for d, ts in idents.items():
            ERRORS.append(f"        [{'/'.join(ts)}] {d[:150]}")
        print(f"   ✗ {len(idents)} 套实体描述")
    if len(alts) > 1:
        err("P3", f"alternateName 有 {len(alts)} 个不同值：{list(alts)}")
        print(f"   ✗ alternateName {len(alts)} 个值")
    if len(slogans) > 1:
        err("P3", f"slogan 有 {len(slogans)} 个不同值：{list(slogans)}")
        print(f"   ✗ slogan {len(slogans)} 个值")

    # schema 描述必须含画像关键词
    req = cfg["requiredTerms"]["schemaDescription"]
    for d, ts in idents.items():
        missing = [t for t in req if not re.search(re.escape(t), d, re.I)]
        if missing:
            warn("P3", f"[{'/'.join(ts)}] 描述缺少画像关键词 {missing}")
    if not idents:
        err("P3", "未找到任何组织级 schema 描述")
    elif len(idents) == 1:
        print("   ✓ 实体描述唯一")


def check_forbidden(cfg, pages):
    """[P4] 残留的 B2C / 泛化表述。"""
    print("\n[P4] 禁用表述")
    hits = 0
    for phrase in cfg["forbiddenPhrases"]["items"]:
        found = [p["path"] for p in pages if p.get("ok") and phrase.lower() in p["html"].lower()]
        if found:
            hits += 1
            err("P4", f"禁用表述「{phrase}」仍出现在：{', '.join(found)}\n"
                      f"        画像是 B2B 制造商，这类 B2C 措辞会让实体归类摇摆")
            print(f"   ✗ {phrase}  ({len(found)} 页)")
    if not hits:
        print("   ✓ 无残留")


def check_line_wording(cfg, pages):
    """[P5] 三条产品线措辞与顺序一致性。"""
    print("\n[P5] 产品线措辞一致性")
    names = [l["name"] for l in cfg["productLines"]]
    for p in pages:
        if not p.get("ok"):
            continue
        blob = f"{p['title']} {' '.join(p['h1'])}"
        pos = {n: blob.lower().find(n.lower()) for n in names}
        present = {n: i for n, i in pos.items() if i >= 0}
        if len(present) >= 2:
            order = [n for n, _ in sorted(present.items(), key=lambda kv: kv[1])]
            expect = [n for n in names if n in present]
            if order != expect:
                warn("P5", f"{p['path']} 产品线顺序为 {order}，"
                           f"约定顺序是 {expect}（固定顺序有助于实体属性识别）")
    if not WARNS:
        print("   ✓ 未发现顺序不一致")
    else:
        print(f"   见下方 {len([w for w in WARNS if '[P5]' in w])} 条告警")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true", help="有阻断问题时 exit 1")
    ap.add_argument("--base", default="https://aquafarer.com", help="目标站点（本地预览/线上）")
    a = ap.parse_args()
    global BASE
    BASE = a.base

    with open(CFG, encoding="utf-8") as f:
        cfg = json.load(f)

    print("=" * 66)
    print("品牌定位一致性检查")
    print("画像：RIB Boats, Inflatable Boats, SUP Boards Manufacturer & OEM/ODM")
    print("=" * 66)

    key_paths = ["/", "/products/", "/supboard/", "/oem-odm-blueprint/", "/about/", "/factory/"]
    with ThreadPoolExecutor(6) as ex:
        pages = list(ex.map(page, key_paths))
    home = pages[0]
    if not home.get("ok"):
        print("首页不可达，退出。")
        return 2

    check_pillars(cfg)
    check_service(cfg)
    check_home_terms(cfg, home)
    check_schema_identity(cfg, home)
    check_forbidden(cfg, pages)
    check_line_wording(cfg, pages)

    print("\n" + "=" * 66)
    print(f"阻断 {len(ERRORS)} 项 · 告警 {len(WARNS)} 项")
    print("=" * 66)
    for e in ERRORS:
        print(e)
    for w in WARNS:
        print(w)

    return 1 if (a.strict and ERRORS) else 0


if __name__ == "__main__":
    sys.exit(main())
