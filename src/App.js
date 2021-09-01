import { useState } from 'react';
import Grid from './components/pathfinder/Grid';
import Header from './components/pathfinder/Header';

function App() {
  const [nodeSize, setNodeSize] = useState(3)

  return (
    <>
      <Header nodeSize={nodeSize} setNodeSize={setNodeSize} />
      <Grid size={nodeSize} />
    </>
  );
}

export default App;
