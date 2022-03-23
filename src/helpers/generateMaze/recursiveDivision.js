import buildBlankSpace from './buildBlankSpace';
import buildWall from './buildWall';
import randomCoordinate from './randomCoordinate';

const recursiveDivision = (newGrid, minRow, maxRow, minCol, maxCol) => {
  if (minRow >= maxRow || minCol >= maxCol) return;

  let horizontalDirection = maxRow - minRow > maxCol - minCol;

  if (horizontalDirection) {
    //wall coordinate
    let wallRowCoordinate = randomCoordinate(minRow, maxRow, 'wall');
    buildWall(wallRowCoordinate, maxRow, minCol, maxCol, 'horizontal', newGrid);
    buildBlankSpace(wallRowCoordinate, maxRow, minCol, maxCol, 'horizontal', newGrid);

    //call function on top and bottom half
    recursiveDivision(newGrid, minRow, wallRowCoordinate - 1, minCol, maxCol); //top
    recursiveDivision(newGrid, wallRowCoordinate + 1, maxRow, minCol, maxCol); //bottom
  } else {
    //wall coordinate
    let wallColCoordinate = randomCoordinate(minCol, maxCol, 'wall');
    buildWall(minRow, maxRow, wallColCoordinate, maxCol, 'vertical', newGrid);
    buildBlankSpace(minRow, maxRow, wallColCoordinate, maxCol, 'vertical', newGrid);

    recursiveDivision(newGrid, minRow, maxRow, minCol, wallColCoordinate - 1); //left
    recursiveDivision(newGrid, minRow, maxRow, wallColCoordinate + 1, maxCol); //right
  }
};

export default recursiveDivision;
