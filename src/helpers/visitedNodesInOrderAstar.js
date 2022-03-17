import checkNeighbours from './checkNeighbours';

const visitedNodesInOrderAstar = (startNode, endNode, grid) => {
  let finalArray = [];
  let leastValueNode = startNode;
  let sortedNodeArray = [];
  leastValueNode.distance = 0;
  sortedNodeArray.push(leastValueNode);

  while (!leastValueNode.isEnd || sortedNodeArray.length === 0) {
    //for (let i = 0; i < 10; i++) {

    //CHECK ALL NEIGHBOURS OF CURRENT NODE UPDATE DISTANCE AND HEURISTIC
    //PUSH ALL NEIGHBOURS TO ARRAY SORT THE ARRAY AS PER THE SUM
    //POP THE FIRST ELEMENT MARK IT AS VISITED
    //CHECK FOR ALL NEIGHBOURS AND AGAIN SORT
    leastValueNode = sortedNodeArray[0];
    sortedNodeArray.shift();

    if (!leastValueNode.isVisited) {
      leastValueNode.isVisited = true;
      finalArray.push(leastValueNode);
    }

    let row = leastValueNode.row;
    let col = leastValueNode.col;
    grid[row][col] = leastValueNode;
    var values = checkNeighbours(leastValueNode, sortedNodeArray, row, col, grid);
    grid = values[0];
    sortedNodeArray = values[1];
  }
  return finalArray;
};

export default visitedNodesInOrderAstar;
