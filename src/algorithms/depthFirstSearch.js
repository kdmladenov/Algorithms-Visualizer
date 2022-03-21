let flag = false;

const depthFirstSearch = (grid, node, visitedNodesInOrder) => {


  visitedNodesInOrder.push(node);
  node.isVisited = true;

  const newGrid = grid.slice();
  const newNode = {
    ...node,
    isVisited: true
  };

  const { row, col } = node;

  newGrid[row][col] = newNode;

  if (node.isEnd) {
    flag = true;
    return visitedNodesInOrder;
  }  
  
  const isNodeValid = (node) => !node.isVisited && !node.isWall && !flag;

  // Top
  if (row < grid.length - 1 && isNodeValid(grid[row + 1][col]))
    depthFirstSearch(newGrid, grid[row + 1][col], visitedNodesInOrder, flag);

  // Bottom
  if (row > 0 && isNodeValid(grid[row - 1][col]))
    depthFirstSearch(newGrid, grid[row - 1][col], visitedNodesInOrder, flag);

  // Left
  if (col > 0 && isNodeValid(grid[row][col - 1]))
    depthFirstSearch(newGrid, grid[row][col - 1], visitedNodesInOrder, flag);

  // Right
  if (col < grid[0].length - 1 && isNodeValid(grid[row][col + 1]))
    depthFirstSearch(newGrid, grid[row][col + 1], visitedNodesInOrder, flag);

  return visitedNodesInOrder;
};

export default depthFirstSearch;
