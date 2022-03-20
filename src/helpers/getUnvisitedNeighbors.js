const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const { col, row } = node;

  const topNeighbor = grid[row - 1][col];
  const bottomNeighbor = grid[row + 1][col];
  const leftNeighbor = grid[row][col - 1];
  const rightNeighbor = grid[row][col - 1];

  neighbors.push(
    row > 0
      ? topNeighbor
      : row < grid.length - 1
      ? bottomNeighbor
      : col > 0
      ? leftNeighbor
      : rightNeighbor
  );

  return neighbors.filter((neighbor) => !neighbor.isVisited);
};
export default getUnvisitedNeighbors;
