const buildWall = (minRow, maxRow, minCol, maxCol, direction, newGrid) => {
  while (
    (direction === 'horizontal' ? minCol <= maxCol : minRow <= maxRow) &&
    newGrid[minRow][minCol].isWeight === false
  ) {
    newGrid[minRow][minCol].isWall = true;
    direction === 'horizontal' ? minCol++ : minRow++;
  }
};

export default buildWall;
