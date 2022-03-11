import React, { createContext, useState } from 'react';
import Grid from './components/pathfinder/Grid';
import Header from './components/pathfinder/Header';
import getRandomNumber from './helpers/getRandomNumber';

export const AppContext = createContext();

const GRID_HEIGHT_TO_SCREEN_RATIO = 85;

const App = () => {
  const [nodeSize, setNodeSize] = useState(3);
  const [toggle, setToggle] = useState('');

  const aspectRatio = 16 / 9; // cols/rows
  const rowCount = Math.floor(GRID_HEIGHT_TO_SCREEN_RATIO / nodeSize);
  const colCount = Math.floor(rowCount * aspectRatio);

  const [grid, setGrid] = useState([]);
  const [startRow, setStartRow] = useState(getRandomNumber(rowCount));
  const [startCol, setStartCol] = useState(getRandomNumber(colCount));
  const [endRow, setEndRow] = useState(getRandomNumber(rowCount));
  const [endCol, setEndCol] = useState(getRandomNumber(colCount));

  return (
    <AppContext.Provider
      value={{
        nodeSize,
        setNodeSize,
        toggle,
        setToggle,
        grid,
        setGrid,
        startRow,
        setStartRow,
        startCol,
        setStartCol,
        endRow,
        setEndRow,
        endCol,
        setEndCol,
        rowCount,
        colCount
      }}
    >
      <Header />
      <Grid />
    </AppContext.Provider>
  );
};

export default App;
