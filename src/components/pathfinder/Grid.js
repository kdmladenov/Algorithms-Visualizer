import React, { useEffect, useState } from 'react';
import './styles/Grid.css';
import Node from './Node';
import getRandomNumber from '../../helpers/getRandomNumber';
import visualizeAlgorithm from '../../helpers/visualizeAlgorithm';

const Grid = ({ size, toggle, setToggle }) => {
  const aspectRatio = 16 / 9; // cols/rows
  const rowCount = Math.floor(85 / size);
  const colCount = Math.floor(rowCount * aspectRatio);

  const [grid, setGrid] = useState([]);
  const [startRow, setStartRow] = useState(getRandomNumber(rowCount));
  const [startCol, setStartCol] = useState(getRandomNumber(colCount));
  const [endRow, setEndRow] = useState(getRandomNumber(rowCount));
  const [endCol, setEndCol] = useState(getRandomNumber(colCount));
  const [mouseIsPressed, setMouseIsPressed] = useState(false);

  const handleMouseDown = (row, col) => {
    if (startRow === row && startCol === col) {
      setToggle('start');
      setGrid(newGridWithToggledNode(row, col));
    } else if (endRow === row && endCol === col) {
      setToggle('end');
    }
    setMouseIsPressed(true);
  };

  const handleMouseMove = (row, col) => {
    if (!mouseIsPressed || toggle === 'start' || toggle === 'end') return; //goes to handleMouseClick
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
        : toggle === 'eraser'
        ? (nodeToBeToggled = {
            ...nodeToBeToggled,
            isWall: false,
            isWeight: false
          })
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
      <button onClick={() => visualizeAlgorithm(grid, startRow, startCol, endRow, endCol)}>
        Run Algorithm
      </button>
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
                  onMouseMove={(row, col) => handleMouseMove(row, col)}
                  onMouseUp={(row, col) => handleMouseUp(row, col)}
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
