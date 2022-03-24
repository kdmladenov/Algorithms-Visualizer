import updateAStarDistance from './updateAStarDistance';

const checkNeighbors = (leastValueNode, sortedNodeArray, row, col, grid) => {
  const isNodeValid = (node) => !node.isVisited && !node.isWall && !sortedNodeArray.includes(node);

  //Top
  if (row > 0 && isNodeValid(grid[row - 1][col])) {
    grid[row - 1][col] = updateAStarDistance(leastValueNode, grid[row - 1][col]);
    sortedNodeArray.push(grid[row - 1][col]);
  }
  //Bottom
  if (row < grid.length - 1 && isNodeValid(grid[row + 1][col])) {
    grid[row + 1][col] = updateAStarDistance(leastValueNode, grid[row + 1][col]);
    sortedNodeArray.push(grid[row + 1][col]);
  }
  //Left
  if (col > 0 && isNodeValid(grid[row][col - 1])) {
    grid[row][col - 1] = updateAStarDistance(leastValueNode, grid[row][col - 1]);
    sortedNodeArray.push(grid[row][col - 1]);
  }
  //Right
  if (col < grid[0].length - 1 && isNodeValid(grid[row][col + 1])) {
    grid[row][col + 1] = updateAStarDistance(leastValueNode, grid[row][col + 1]);
    sortedNodeArray.push(grid[row][col + 1]);
  }

  sortedNodeArray = sortedNodeArray.sort((a, b) => a.distAStar - b.distAStar);

  return [grid, sortedNodeArray];
};

export default checkNeighbors;
