import { useState } from 'react';
import Grid from './components/pathfinder/Grid';
import Header from './components/pathfinder/Header';

function App() {
  const [nodeSize, setNodeSize] = useState(3);
  const [toggle, setToggle] = useState('');

  return (
    <>
      <Header nodeSize={nodeSize} setNodeSize={setNodeSize} toggle={toggle} setToggle={setToggle} />
      <Grid size={nodeSize} toggle={toggle} setToggle={setToggle} />
    </>
  );
}

export default App;
