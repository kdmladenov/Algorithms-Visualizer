import React from 'react';
import './styles/Grid.css';
import Node from './Node';

const Grid = ({ size }) => {
  const aspectRatio = 16 / 9; // cols/rows
  const rowCount = Math.floor(90 / size);
  const colCount = Math.floor(rowCount * aspectRatio);
  const grid = [];

  for (let currentRow = 0; currentRow < rowCount; currentRow++) {
    grid.push([]);
    for (let currentCol = 0; currentCol < colCount; currentCol++) {
      grid[currentRow].push([]);
    }
  }

  let startRow = Math.floor(Math.random() * rowCount);
  let startCol = Math.floor(Math.random() * colCount);
  let endRow = Math.floor(Math.random() * rowCount);
  let endCol = Math.floor(Math.random() * colCount);

  return (
    <div className="grid">
      <div className="row">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="col">
            {row.map((node, nodeIndex) => (
              <Node
                key={nodeIndex}
                col={nodeIndex + 1}
                row={rowIndex + 1}
                isStart={startRow === rowIndex && startCol === nodeIndex}
                isEnd={endRow === rowIndex && endCol === nodeIndex}
                size={size}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
