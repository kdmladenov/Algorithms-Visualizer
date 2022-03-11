import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { icons } from '../../constants/constants';
import visualizeAlgorithm from '../../helpers/visualizeAlgorithm';
import './styles/Header.css';

const Header = () => {
  const { nodeSize, setNodeSize, toggle, setToggle, grid, startRow, startCol, endRow, endCol } =
    useContext(AppContext);

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
      <button onClick={() => visualizeAlgorithm(grid, startRow, startCol, endRow, endCol)}>
        Run Algorithm
      </button>
    </div>
  );
};

export default Header;
