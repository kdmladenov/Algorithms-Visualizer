const calculateHeuristicDist = (node, endNode) => {
  const destRow = endNode.row;
  const destCol = endNode.col;
  const {row, col} = node.row;

  let rowDist = destRow - row;
  if (rowDist < 0) rowDist = rowDist * -1;
  let colDist = destCol - col;
  if (colDist < 0) colDist = colDist * -1;
  return rowDist + colDist;
};

export default calculateHeuristicDist;
