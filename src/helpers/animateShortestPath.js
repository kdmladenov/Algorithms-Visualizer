const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const node = nodesInShortestPathOrder[i];

      document.getElementById(`node-${node.row}-${node.col}`).className = 'node shortest_path';
    }, 50 * i);
  }
};

export default animateShortestPath;
