import React, { useEffect, useState } from 'react';
import './styles/Grid.css';
import Node from './Node';

const Grid = ({ size }) => {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const aspectRatio = 16 / 9; // cols/rows
  const rowCount = Math.floor(90 / size);
  const colCount = Math.floor(rowCount * aspectRatio);

  let startRow = Math.floor(Math.random() * rowCount);
  let startCol = Math.floor(Math.random() * colCount);
  let endRow = Math.floor(Math.random() * rowCount);
  let endCol = Math.floor(Math.random() * colCount);

  const handleMouseClick = (row, col) => {
    setGrid(gridWithToggleWall(row, col));
    setMouseIsPressed(true);
  };

  const handleMouseHover = (row, col) => {
    if (!mouseIsPressed) return; //goes to handleMouseClick
    if (grid[row][col].isWall) return;
    setGrid(gridWithToggleWall(row, col));
  };

  const gridWithToggleWall = (row, col) => {
    const gridCopy = [...grid];
    const nodeToBeToggled = gridCopy[row][col];
    const toggledNode = { ...nodeToBeToggled, isWall: !nodeToBeToggled.isWall };
    gridCopy[row][col] = toggledNode;

    return gridCopy;
  };

  useEffect(() => {
    const nodes = [];
    for (let currRow = 0; currRow < rowCount; currRow++) {
      nodes.push([]);
      for (let currCol = 0; currCol < colCount; currCol++) {
        const node = {
          row: currRow,
          col: currCol,
          isStart: startRow === currRow && startCol === currCol,
          isEnd: endRow === currRow && endCol === currCol,
          size,
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null
        };

        nodes[currRow].push(node);
      }
    }
    setGrid(nodes);
    // eslint-disable-next-line
  }, [rowCount, colCount]);

  return (
    <div className="grid">
      <div className="row">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="col">
            {row.map((node, nodeIndex) => {
              const { row, col, isEnd, isStart, size, isWall } = node;
              return (
                <Node
                  key={nodeIndex}
                  col={col}
                  row={row}
                  isStart={isStart}
                  isEnd={isEnd}
                  isWall={isWall}
                  size={size}
                  mouseIsPressed={mouseIsPressed}
                  onMouseClick={(row, col) => handleMouseClick(row, col)}
                  onMouseHover={(row, col) => handleMouseHover(row, col)}
                  onMouseUp={() => setMouseIsPressed(false)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
