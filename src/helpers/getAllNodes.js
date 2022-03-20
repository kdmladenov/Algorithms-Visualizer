const getAllNodes = (grid) => {
  const nodes = [];
  
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
};

export default getAllNodes;
