import React from 'react'

const Header = ({ nodeSize, setNodeSize }) => {


  return (
    <div>
      <label class="text-warning" for="nodes-amount">
        Resize the Grid
      </label>
      <input
        name="nodes-amount"
        type="range"
        class="form-range"
        id="nodes-slider"
        value={nodeSize}
        onChange={(e) => setNodeSize(e.target.value)}
        min="2"
        max="10"
      />
    </div>
  );
};

export default Header
