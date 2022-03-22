const calculateManhattanDist = (currentNode, endNode) => {
  const { row: currRow, col: currCol } = currentNode;
  const { row: endRow, col: endCol } = endNode;

  return Math.abs(currRow - endRow) + Math.abs(currCol - endCol);
};

export default calculateManhattanDist;
