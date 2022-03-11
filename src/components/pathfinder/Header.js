import React from 'react';
import { icons } from '../../constants/constants';
import './styles/Header.css';

const Header = ({ nodeSize, setNodeSize, toggle, setToggle }) => {
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
    </div>
  );
};

export default Header;
