import calculateHeuristicDist from './calculateHeuristicDist';

const Heuristic = (endNode, grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      const node = grid[row][col];
      
      if (node.isWall) {
        node.heuristicDist = 9999;
      } else {
        let totalDist = calculateHeuristicDist(node, endNode);
        node.heuristicDist = totalDist;
      }
      grid[row][col] = node;
    }
  }
  return grid;
};

export default Heuristic;
