#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
07_positioning_check.py —— 品牌定位一致性检查

公司画像（客户确认，2026-10）：
    Inflatable SUP Boards Overstock & Clearance — Factory Direct（B2C 清仓商城）

2026-10-23 站点转型：从三线 B2B 制造商（RIB/Inflatable/SUP）收敛为充气 SUP
尾货清仓商城。本脚本检查线上站点的实际表述是否与画像一致，五项检查：

  [P1] 唯一品类落地页 /supboard/ 是否存在、自指 canonical 且可索引
  [P2] 首页 title / H1 / description 是否含全部必需词（SUP / Overstock / Clearance）
  [P3] schema 里的实体身份是否统一（描述 / alternateName / slogan 唯一）
  [P4] storefront 页面是否残留船类 / B2B 制造商表述（RIB / Inflatable Boat / Kayak）
  [P5] storefront 页面标题是否守住清仓商城身份（含 SUP，不含 Manufacturer / OEM / ODM）

用法：
    python3 scripts/07_positioning_check.py
    python3 scripts/07_positioning_check.py --strict   # 有问题时 exit 1，可进 CI
    python3 scripts/07_positioning_check.py --base http://localhost:4321/
"""

from __future__ import annotations
import argparse, json, os, re, sys, urllib.request, urllib.error
from concurrent.futures import ThreadPoolExecutor

BASE = "https://paddleboardoverstock.com"
UA = "Mozilla/5.0 (compatible; PaddleBoardOverstockPositioningCheck/1.0)"
HERE = os.path.dirname(os.path.abspath(__file__))
CFG = os.path.join(HERE, "..", "src", "config", "positioning.json")

# storefront：身份表述必须 100% 清仓商城口径，P4/P5 违规直接阻断
STOREFRONT = ["/", "/products/", "/supboard/"]
# 其余关键页：历史 B2B 内容允许渐进清理，P4 违规降级为告警
LEGACY_PAGES = ["/oem-odm/", "/about/", "/factory/"]

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


def visible_text(html: str) -> str:
    """去掉 script/style 与标签，只留可见文本（避免 URL/JSON-LD 误报）。"""
    t = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S | re.I)
    return re.sub(r"<[^>]+>", " ", t)


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
    """[P1] 唯一品类落地页 /supboard/ 是否可索引。"""
    print("\n[P1] 品类落地页")
    for line in cfg["productLines"]:
        p = page(line["path"])
        name = line["name"]
        if not p["ok"]:
            err("P1", f"{name} 落地页 {line['path']} 返回 {p['status']} —— "
                      f"清仓商城唯一的品类落地页不可达")
            print(f"   ✗ {name:24} {line['path']:14} HTTP {p['status']}")
            continue
        canon = p["canonical"].replace(BASE, "").rstrip("/") + "/"
        want = line["path"]
        if canon != want:
            err("P1", f"{name} 页 {want} 的 canonical 指向 {canon}，"
                      f"等于主动放弃这个落地页的排名资格")
            print(f"   ✗ {name:24} {want:14} canonical→{canon}")
        elif "noindex" in p["robots"]:
            err("P1", f"{name} 页 {want} 是 noindex")
            print(f"   ✗ {name:24} {want:14} noindex")
        else:
            print(f"   ✓ {name:24} {want:14} 可索引")


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


def check_schema_identity(cfg, home):
    """[P3] schema 实体身份是否统一。"""
    print("\n[P3] schema 实体身份")
    nodes = schema_nodes(home["html"])
    idents, alts, slogans = {}, {}, {}
    org_types = ("Organization", "OnlineStore", "Store", "Brand", "WebSite",
                 "ManufacturingBusiness")
    for n in nodes:
        raw = n.get("@type")
        # schema.org 允许 @type 为数组（如 ['Organization','OnlineStore']，见 utils/schema-graph.ts）。
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
    """[P4] 船类 / B2B 制造商残留表述。storefront 阻断，其余关键页告警。"""
    print("\n[P4] 禁用表述")
    blocked = 0
    for phrase in cfg["forbiddenPhrases"]["items"]:
        pat = re.compile(r"\b" + re.escape(phrase) + r"\b", re.I)
        for p in pages:
            if not p.get("ok"):
                continue
            if not pat.search(visible_text(p["html"])):
                continue
            if p["path"] in STOREFRONT:
                blocked += 1
                err("P4", f"禁用表述「{phrase}」出现在 storefront 页 {p['path']} 的可见文本中\n"
                          f"        画像是 SUP 清仓商城，船类 / B2B 制造商措辞会让实体归类摇摆")
                print(f"   ✗ {phrase:28} {p['path']}")
            else:
                warn("P4", f"禁用表述「{phrase}」仍出现在 {p['path']}（历史页允许渐进清理）")
                print(f"   ! {phrase:28} {p['path']}")
    if not blocked:
        print("   ✓ storefront 无残留")


def check_identity_wording(cfg, pages):
    """[P5] storefront 标题身份：必须含 SUP，不得自称 Manufacturer / OEM / ODM。"""
    print("\n[P5] storefront 身份")
    bad = 0
    for p in pages:
        if not p.get("ok") or p["path"] not in STOREFRONT:
            continue
        if not re.search(r"\bSUP\b", p["title"], re.I):
            bad += 1
            err("P5", f"storefront 页 {p['path']} 的 title 不含 SUP\n        当前值：{p['title']}")
            print(f"   ✗ title 缺 SUP    {p['path']}")
    for field, val in (("title", home_page["title"]), ("H1", " ".join(home_page["h1"]))):
        m = re.search(r"\b(Manufacturer|OEM|ODM)\b", val)
        if m:
            bad += 1
            err("P5", f"首页 {field} 自称「{m.group(1)}」—— 与 B2C 清仓商城画像冲突\n        当前值：{val}")
            print(f"   ✗ 首页 {field} 含 {m.group(1)}")
    if not bad:
        print("   ✓ storefront 身份一致")


home_page: dict = {}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true", help="有阻断问题时 exit 1")
    ap.add_argument("--base", default="https://paddleboardoverstock.com", help="目标站点（本地预览/线上）")
    a = ap.parse_args()
    global BASE
    BASE = a.base

    with open(CFG, encoding="utf-8") as f:
        cfg = json.load(f)

    print("=" * 66)
    print("品牌定位一致性检查")
    print("画像：Inflatable SUP Boards Overstock & Clearance — Factory Direct")
    print("=" * 66)

    key_paths = STOREFRONT + LEGACY_PAGES
    with ThreadPoolExecutor(6) as ex:
        pages = list(ex.map(page, key_paths))
    global home_page
    home_page = pages[0]
    if not home_page.get("ok"):
        print("首页不可达，退出。")
        return 2

    check_pillars(cfg)
    check_home_terms(cfg, home_page)
    check_schema_identity(cfg, home_page)
    check_forbidden(cfg, pages)
    check_identity_wording(cfg, pages)

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
