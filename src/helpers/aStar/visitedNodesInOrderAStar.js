import checkNeighbors from './checkNeighbors';

const visitedNodesInOrderAStar = (startNode, grid) => {
  let finalArray = [];
  let leastValueNode = startNode;
  let sortedNodeArray = [];
  leastValueNode.distance = 0;
  sortedNodeArray.push(leastValueNode);

  while (!leastValueNode.isEnd || sortedNodeArray.length === 0) {
    leastValueNode = sortedNodeArray.shift();

    if (!leastValueNode.isVisited) {
      leastValueNode.isVisited = true;
      finalArray.push(leastValueNode);
    }

    let { row, col } = leastValueNode;

    grid[row][col] = leastValueNode;

    [grid, sortedNodeArray] = checkNeighbors(leastValueNode, sortedNodeArray, row, col, grid);
  }

  return finalArray;
};

export default visitedNodesInOrderAStar;
