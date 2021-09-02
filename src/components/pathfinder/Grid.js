import React, { useEffect, useState } from 'react';
import './styles/Grid.css';
import Node from './Node';

const Grid = ({ size }) => {
  const aspectRatio = 16 / 9; // cols/rows
  const rowCount = Math.floor(90 / size);
  const colCount = Math.floor(rowCount * aspectRatio);

  const [grid, setGrid] = useState([]);
  const [startRow, setStartRow] = useState(Math.floor(Math.random() * rowCount));
  const [startCol, setStartCol] = useState(Math.floor(Math.random() * colCount));
  const [endRow, setEndRow] = useState(Math.floor(Math.random() * rowCount));
  const [endCol, setEndCol] = useState(Math.floor(Math.random() * colCount));
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [relocateStart, setRelocateStart] = useState(false);
  const [relocateEnd, setRelocateEnd] = useState(false);

  const handleMouseDown = (row, col) => {
    if (startRow === row && startCol === col) {
      setRelocateStart(true);
      setGrid(gridWithRelocatedStartEnd(row, col));
    } else if (endRow === row && endCol === col) {
      setRelocateEnd(true);
      setGrid(gridWithRelocatedStartEnd(row, col));
    } else {
      setGrid(gridWithToggleWall(row, col));
    }

    setMouseIsPressed(true);
  };

  const handleMouseHover = (row, col) => {
    if (!mouseIsPressed || relocateStart || relocateEnd || grid[row][col].isWall) return; //goes to handleMouseClick
    setGrid(gridWithToggleWall(row, col));
  };

  const handleMouseUp = (row, col) => {
    if (relocateStart) {
      setStartRow(row);
      setStartCol(col);
    }
    if (relocateEnd) {
      setEndRow(row);
      setEndCol(col);
    }
    setMouseIsPressed(false);
    setGrid(gridWithRelocatedStartEnd(row, col));
    setRelocateStart(false);
    setRelocateEnd(false);
  };

  const handleMouseDoubleClick = (row, col) => {
    if ((startRow === row && startCol === col) || (endRow === row && endCol === col)) return;
    setGrid(gridWithToggleWeight(row, col));
  };

  const gridWithToggleWall = (row, col) => {
    const gridCopy = [...grid];
    const nodeToBeToggled = gridCopy[row][col];
    const toggledNode = { ...nodeToBeToggled, isWall: !nodeToBeToggled.isWall };
    gridCopy[row][col] = toggledNode;

    return gridCopy;
  };

  const gridWithToggleWeight = (row, col) => {
    const gridCopy = [...grid];
    const nodeToBeToggled = gridCopy[row][col];
    const toggledNode = { ...nodeToBeToggled, isWeight: !nodeToBeToggled.isWeight };

    console.log(toggledNode);
    gridCopy[row][col] = toggledNode;

    return gridCopy;
  };

  const gridWithRelocatedStartEnd = (row, col) => {
    const gridCopy = [...grid];
    let nodeToBeRelocated = gridCopy[row][col];
    if (relocateStart) {
      if (mouseIsPressed) {
        nodeToBeRelocated = { ...nodeToBeRelocated, isStart: false };
      } else {
        nodeToBeRelocated = { ...nodeToBeRelocated, isStart: true };
      }
    }
    if (relocateEnd) {
      if (mouseIsPressed) {
        nodeToBeRelocated = { ...nodeToBeRelocated, isEnd: false };
      } else {
        nodeToBeRelocated = { ...nodeToBeRelocated, isEnd: true };
      }
    }
    gridCopy[row][col] = nodeToBeRelocated;

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
          isWeight: false,
          previousNode: null
        };

        nodes[currRow].push(node);
      }
    }
    setGrid(nodes);
  }, [rowCount, colCount, startRow, startCol, endRow, endCol, size]);

  return (
    <div className="grid">
      <div className="row">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="col">
            {row.map((node, nodeIndex) => {
              const { row, col, isEnd, isStart, size, isWall, isWeight } = node;
              return (
                <Node
                  key={nodeIndex}
                  col={col}
                  row={row}
                  isStart={isStart}
                  isEnd={isEnd}
                  isWall={isWall}
                  size={size}
                  isWeight={isWeight}
                  mouseIsPressed={mouseIsPressed}
                  onMouseDown={(row, col) => handleMouseDown(row, col)}
                  onMouseHover={(row, col) => handleMouseHover(row, col)}
                  onMouseUp={(row, col) => handleMouseUp(row, col)}
                  onMouseDoubleClick={(row, col) => handleMouseDoubleClick(row, col)}
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
