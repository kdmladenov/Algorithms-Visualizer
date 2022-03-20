const calculateHeuristicDist = (node, finishNode) => {
  const { row, col } = node;
  const { row: destRow, col: destCol } = finishNode;
  
  let rowDist = destRow - row;
  if (rowDist < 0) rowDist = rowDist * -1;

  let colDist = destCol - col;
  if (colDist < 0) colDist = colDist * -1;

  return rowDist + colDist;
};

export default calculateHeuristicDist;
