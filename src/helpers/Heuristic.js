import calculateManhattanDist from './calculateManhattanDist';

const heuristic = (endNode, grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      const node = grid[row][col];

      node.manhattanDist = !node.isWall ? calculateManhattanDist(node, endNode) : Infinity;

      grid[row][col] = node;
    }
  }

  return grid;
};

export default heuristic;
