import React from 'react';
import './styles/Node.css';

import './styles/Node.css';

const Node = ({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isWeight,
  onMouseDown,
  onMouseHover,
  onMouseUp,
  onMouseDoubleClick,
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

    if (nodeConditionalClassName === 'weight') console.log('node');
      return (
        <div
          style={{ height: `${size}vh`, width: `${size}vw` }}
          id={`node-${row}-${col}`}
          className={`node node-${nodeConditionalClassName}`}
          onMouseDown={() => onMouseDown(row, col)}
          onMouseEnter={() => onMouseHover(row, col)}
          onMouseUp={() => onMouseUp(row, col)}
          onDoubleClick={() => onMouseDoubleClick(row, col)}
        >
          {/* {nodeConditionalClassName === 'start' && <i className="fas fa-play"></i>}
      {nodeConditionalClassName === 'end' && <i className="fas fa-stop"></i>} */}
        </div>
      );
};

export default Node;
