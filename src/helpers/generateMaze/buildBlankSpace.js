import randomCoordinate from './randomCoordinate';

const buildBlankSpace = (minRow, maxRow, minCol, maxCol, direction, newGrid) => {
  if (direction === 'horizontal') {
    let blankCol = randomCoordinate(minCol, maxCol, 'blank');
    if (
      minRow === 0 ||
      blankCol === 0 ||
      minRow === newGrid.length - 1 ||
      blankCol === newGrid[0].length - 1
    )
      return;
    newGrid[minRow][blankCol].isWall = false;
  } else {
    let blankCol = randomCoordinate(minRow, maxRow, 'blank');
    if (
      minCol === 0 ||
      blankCol === 0 ||
      minCol === newGrid[0].length - 1 ||
      blankCol === newGrid.length - 1
    )
      return;
    newGrid[blankCol][minCol].isWall = false;
  }
};

export default buildBlankSpace;
