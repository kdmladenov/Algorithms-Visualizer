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
  const [toggle, setToggle] = useState('');

  const handleMouseDown = (row, col) => {
    if (startRow === row && startCol === col) {
      setToggle('start');
      setGrid(newGridWithToggledNode(row, col));
    } else if (endRow === row && endCol === col) {
      setToggle('end');
      setGrid(newGridWithToggledNode(row, col));
    } else {
      setToggle('wall');
      setGrid(newGridWithToggledNode(row, col));
    }

    setMouseIsPressed(true);
  };

  const handleMouseHover = (row, col) => {
    if (!mouseIsPressed || toggle === 'start' || toggle === 'end' || grid[row][col].isWall) return; //goes to handleMouseClick
    setGrid(newGridWithToggledNode(row, col));
  };

  const handleMouseUp = (row, col) => {
    if (toggle === 'start') {
      setStartRow(row);
      setStartCol(col);
    }
    if (toggle === 'end') {
      setEndRow(row);
      setEndCol(col);
    }
    setMouseIsPressed(false);
    setGrid(newGridWithToggledNode(row, col));
    setToggle('');
  };

  const handleMouseDoubleClick = (row, col) => {
    if ((startRow === row && startCol === col) || (endRow === row && endCol === col)) return;
    setToggle('weight');
    setGrid(newGridWithToggledNode(row, col));
  };

  const newGridWithToggledNode = (row, col) => {
    const gridCopy = [...grid];
    let nodeToBeToggled = gridCopy[row][col];

    const nodeToggled = 
          toggle === 'wall'
        ? (nodeToBeToggled = { ...nodeToBeToggled, isWall: !nodeToBeToggled.isWall })
        : toggle === 'weight'
        ? (nodeToBeToggled = { ...nodeToBeToggled, isWeight: !nodeToBeToggled.isWeight })
        : toggle === 'start'
        ? (nodeToBeToggled = { ...nodeToBeToggled, isStart: !mouseIsPressed })
        : toggle === 'end'
        ? (nodeToBeToggled = { ...nodeToBeToggled, isEnd: !mouseIsPressed })
        : nodeToBeToggled;

    gridCopy[row][col] = nodeToggled;

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
