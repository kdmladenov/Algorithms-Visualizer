import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import { icons } from '../../constants/constants';
import generateMaze from '../../helpers/generateMaze/generateMaze';
import visualizeAlgorithm from '../../helpers/visualizeAlgorithm';
import './styles/Header.css';

const Header = () => {
  const {
    nodeSize,
    setNodeSize,
    toggle,
    setToggle,
    grid,
    setGrid,
    startRow,
    startCol,
    endRow,
    endCol,
    rowCount,
    colCount
  } = useContext(AppContext);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Dijkstra');
  const [animationSpeed, setAnimationSpeed] = useState(10);

  return (
    <div className="header flex">
      <form className="toggle_switch flex">
        {['wall', 'weight', 'eraser'].map((item) => (
          <div key={item}>
            <input
              id={item}
              name="toggle_switch"
              type="radio"
              value={item}
              checked={item === toggle}
              onChange={(e) => setToggle(e.target.value)}
            />
            <label htmlFor={item}>
              <img src={icons[item]} alt={item} />
            </label>
          </div>
        ))}
      </form>

      <fieldset>
        <legend>Resize the Grid</legend>
        <input
          name="nodes-amount"
          type="range"
          id="nodes-slider"
          value={nodeSize}
          onChange={(e) => setNodeSize(e.target.value)}
          min="2"
          max="10"
        />
      </fieldset>

      <fieldset>
        <legend>Select Speed</legend>
        <input
          name="animation_speed"
          type="range"
          id="speed_slider"
          value={animationSpeed}
          onChange={(e) => setAnimationSpeed(e.target.value)}
          min="1"
          max="20"
        />
      </fieldset>

      <fieldset>
        <legend>Select Algorithm</legend>
        <select
          className="dropdown_select"
          name={selectedAlgorithm}
          onChange={(e) => {
            setSelectedAlgorithm(e.target.value);
          }}
        >
          {['Dijkstra', 'A-Star', 'Dept First Search'].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      <button
        onClick={() =>
          visualizeAlgorithm(
            selectedAlgorithm,
            grid,
            startRow,
            startCol,
            endRow,
            endCol,
            animationSpeed
          )
        }
      >
        Run Algorithm
      </button>

      <button className="maze_btn" onClick={() => setGrid(generateMaze(grid, rowCount, colCount))}>
        Generate Maze
      </button>
    </div>
  );
};

export default Header;
