export interface LayoutNode {
  id: string | number;
  label?: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  depth?: number;
  state?: string;
  [key: string]: any;
}

export interface LayoutEdge {
  from: string | number;
  to: string | number;
  [key: string]: any;
}

export class LayoutEngine {
  /**
   * Generates an automatic 2D force-directed layout for a generic graph.
   * Eliminates the need for dummy x/y coordinates.
   */
  static generateForceDirectedLayout(
    nodes: LayoutNode[],
    edges: LayoutEdge[],
    width: number = 400,
    height: number = 300,
    iterations: number = 100
  ): LayoutNode[] {
    const K = Math.sqrt((width * height) / (nodes.length || 1));
    const repulsion = (distance: number) => (K * K) / (distance || 1);
    const attraction = (distance: number) => (distance * distance) / K;

    // Initialize random positions
    nodes.forEach((node, i) => {
      node.x = node.x ?? (Math.random() * width * 0.8 + width * 0.1);
      node.y = node.y ?? (Math.random() * height * 0.8 + height * 0.1);
      node.vx = 0;
      node.vy = 0;
    });

    for (let iter = 0; iter < iterations; iter++) {
      // Calculate repulsive forces
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const dx = nodes[i].x! - nodes[j].x!;
            const dy = nodes[i].y! - nodes[j].y!;
            const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
            const force = repulsion(distance);
            nodes[i].vx! += (dx / distance) * force;
            nodes[i].vy! += (dy / distance) * force;
          }
        }
      }

      // Calculate attractive forces based on edges
      edges.forEach((edge) => {
        const u = nodes.find(n => n.id === edge.from);
        const v = nodes.find(n => n.id === edge.to);
        if (u && v) {
          const dx = v.x! - u.x!;
          const dy = v.y! - u.y!;
          const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
          const force = attraction(distance);
          const fx = (dx / distance) * force;
          const fy = (dy / distance) * force;
          
          u.vx! += fx;
          u.vy! += fy;
          v.vx! -= fx;
          v.vy! -= fy;
        }
      });

      // Update positions
      const temperature = Math.max(10, 50 * Math.pow(0.9, iter)); // Cooling
      nodes.forEach((node) => {
        const vLength = Math.sqrt(node.vx! * node.vx! + node.vy! * node.vy!);
        if (vLength > 0) {
          node.x! += (node.vx! / vLength) * Math.min(vLength, temperature);
          node.y! += (node.vy! / vLength) * Math.min(vLength, temperature);
        }
        
        // Boundaries constraint
        node.x = Math.max(30, Math.min(width - 30, node.x!));
        node.y = Math.max(30, Math.min(height - 30, node.y!));
        
        node.vx = 0;
        node.vy = 0;
      });
    }

    return nodes;
  }

  /**
   * Generates a hierarchical tree layout given a set of nodes and root.
   */
  static generateTreeLayout(
    nodes: LayoutNode[],
    edges: LayoutEdge[],
    rootId: string | number,
    width: number = 400,
    height: number = 300
  ): LayoutNode[] {
    const adj = new Map<string | number, (string | number)[]>();
    edges.forEach(e => {
      if (!adj.has(e.from)) adj.set(e.from, []);
      adj.get(e.from)!.push(e.to);
    });

    const depths = new Map<number, (string | number)[]>();
    const nodeDepth = new Map<string | number, number>();
    
    // BFS to assign depths
    const queue: { id: string | number, d: number }[] = [{ id: rootId, d: 0 }];
    const visited = new Set<string | number>();

    while (queue.length > 0) {
      const { id, d } = queue.shift()!;
      if (!visited.has(id)) {
        visited.add(id);
        nodeDepth.set(id, d);
        if (!depths.has(d)) depths.set(d, []);
        depths.get(d)!.push(id);
        
        (adj.get(id) || []).forEach(child => {
          if (!visited.has(child)) {
            queue.push({ id: child, d: d + 1 });
          }
        });
      }
    }

    const maxDepth = Math.max(...Array.from(depths.keys()));
    const ySpacing = height / (maxDepth + 1.5);

    depths.forEach((nodesAtDepth, depth) => {
      const xSpacing = width / (nodesAtDepth.length + 1);
      nodesAtDepth.forEach((nodeId, idx) => {
        const node = nodes.find(n => n.id === nodeId);
        if (node) {
          node.x = xSpacing * (idx + 1);
          node.y = 30 + (depth * ySpacing);
        }
      });
    });

    // Handle disjoint nodes (if any)
    let disjointX = 30;
    nodes.forEach(node => {
      if (!visited.has(node.id)) {
        node.x = disjointX;
        node.y = height - 30;
        disjointX += 40;
      }
    });

    return nodes;
  }
}
