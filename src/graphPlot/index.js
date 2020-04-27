import React from 'react';

const CELL = { W: 150, H: 120 };
const BOX = { W: 70, H: 60 };

const getNodePath = (index) => {
  const { W, H } = BOX;
  const x = index * CELL.W;
  const y = index * CELL.H;
  return `M${x},${y} l0,${H} l${W},0 l0,-${H}z`;
};

const getEdgePathDn = (n1, n2) => {
  const { W, H } = CELL;
  const x1 = BOX.W + n1 * W;
  const y1 = (BOX.H/2) + n1 * H;
  const x2 = (BOX.W/2) + n2 * W;
  const y2 = n2 * H;
  return `M${x1},${y1} Q ${x2} ${y1}, ${x2} ${y2}`;
}

const getEdgePath = (n1, n2) => {
  if(n1 < n2) return getEdgePathDn(n1, n2);
  const { W, H } = CELL;
  const x1 = n1 * W;
  const y1 = (BOX.H/2) + n1 * H;
  const x2 = (BOX.W/2) + n2 * W;
  const y2 = BOX.H + n2 * H;
  return `M${x1},${y1} Q ${x2} ${y1}, ${x2} ${y2}`;
}

const GraphPlot = ({ width, height }) => {
  const nodes = [0, 1, 2, 3, 4];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],
    [1,0],[1,2],[1,3],[1,4],
    [2,0],[2,1],[2,3],[2,4],
    [3,0],[3,1],[3,2],[3,4],
    [4,0],[4,1],[4,2],[4,3]
  ];
  const nodePaths = nodes.map(getNodePath);
  const edgePaths = edges.map(link => {
    const [n1, n2] = link;
    return getEdgePath(n1, n2);
  });
  return (
    <svg width={width} height={height} viewport={`0 0 ${width} ${height}`}>
      <defs>
        <marker
          id='head'
          orient='auto'
          markerWidth='8'
          markerHeight='8'
          refX='4'
          refY='4'
        >
          <path d='M0,0 V8 L4,4 Z' fill='black' />
        </marker>
      </defs>
      <rect x='0' y='0' width={width} height={height} fill='silver'></rect>
      <path
        markerEnd="url(#head)"
        markerMid="url(#head)"
        fill='transparent'
        stroke='green'
        strokeWidth="3"
        d={edgePaths.join(' ')}
      ></path>
      <path fill='blue' fillOpacity="0.8" d={nodePaths.join(' ')}></path>
    </svg>
  );
};

export default GraphPlot;
