import calculateHeuristicDist from './calculateHeuristicDist';

const Heuristic = (endNode, grid, rowsCount, columnsCount) => {
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
}

export default Heuristic
