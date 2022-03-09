import React from 'react';
import { icons } from '../../constants/constants';
import './styles/Node.css';

const Node = ({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isWeight,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  size
}) => {
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
      className={`node ${nodeConditionalClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseMove(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
    >
      {nodeConditionalClassName && (
        <img src={icons[nodeConditionalClassName]} alt={nodeConditionalClassName} />
      )}
    </div>
  );
};

export default Node;
