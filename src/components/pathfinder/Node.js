import React from 'react';
import './styles/Node.css';


const Node = ({ row, col, isStart, isEnd, isWall, isWeight, onMouseDown, size }) => {
  const nodeConditionalClassName = isEnd
    ? 'end'
    : isStart
    ? 'start'
    : isWall
    ? 'wall'
    : isWeight
    ? 'weight'
    : '';

  return (
    <div
      style={{ height: `${size}vh`, width: `${size}vw` }}
      id={`node-${row}-${col}`}
      className={`node node-${nodeConditionalClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
    />
  );
};

export default Node;
