import updateAStarDistance from './updateAStarDistance';

const checkNeighbors = (leastValueNode, sortedNodeArray, row, col, grid) => {
  const isNodeValid = (node) =>
    !node.isVisited && !node.isWall && sortedNodeArray.indexOf(node) === -1;

  if (row > 0 && isNodeValid(grid[row - 1][col])) {
    grid[row - 1][col] = updateAStarDistance(leastValueNode, grid[row - 1][col]);
    sortedNodeArray.push(grid[row - 1][col]);
  }

  if (row < grid.length - 1 && isNodeValid(grid[row + 1][col])) {
    grid[row + 1][col] = updateAStarDistance(leastValueNode, grid[row + 1][col]);
    sortedNodeArray.push(grid[row + 1][col]);
  }

  if (col > 0 && isNodeValid(grid[row][col - 1])) {
    grid[row][col - 1] = updateAStarDistance(leastValueNode, grid[row][col - 1]);
    sortedNodeArray.push(grid[row][col - 1]);
  }

  if (col < grid[0].length - 1 && isNodeValid(grid[row][col + 1])) {
    grid[row][col + 1] = updateAStarDistance(leastValueNode, grid[row][col + 1]);
    sortedNodeArray.push(grid[row][col + 1]);
  }

  sortedNodeArray = sortedNodeArray.sort((a, b) => a.distAstar - b.distAstar);

  return [grid, sortedNodeArray];
};

export default checkNeighbors;
