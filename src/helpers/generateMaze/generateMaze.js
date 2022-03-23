import recursiveDivision from './recursiveDivision';

export const generateMaze = (grid, rows, cols) => {
  const newGrid = grid.slice();
  //convert edges to walls
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 || col === 0 || row === rows - 1 || col === cols - 1) {
        newGrid[row][col].isWall = true;
      }
    }
  }

  recursiveDivision(newGrid, 0, rows - 2, 0, cols - 2);

  return newGrid;
};

export default generateMaze;
