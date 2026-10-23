import { nodes, type GraphNode } from '../../content/graph/nodes';
import { relations, type GraphRelation } from '../../content/graph/relations';

export interface SerializedNode {
  id: string;
  type: string;
  name: string;
  description: string;
}

export interface SerializedRelation {
  source: string;
  target: string;
  type: string;
  label: string;
}

export interface GraphData {
  nodes: SerializedNode[];
  relations: SerializedRelation[];
}

export function getGraphData(lang: string): GraphData {
  const gNodes: SerializedNode[] = nodes.map((n: GraphNode) => ({
    id: n.id,
    type: n.type,
    name: n.name[lang] || n.name.en || n.id,
    description: n.description[lang] || n.description.en || '',
  }));

  const gRelations: SerializedRelation[] = relations.map((r: GraphRelation) => ({
    source: r.source,
    target: r.target,
    type: r.type,
    label: r.label[lang] || r.label.en || r.type,
  }));

  return { nodes: gNodes, relations: gRelations };
}
