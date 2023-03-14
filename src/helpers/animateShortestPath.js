const shortestPathDelay = 50;

const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      const { row, col } = nodesInShortestPathOrder[i];

      document.getElementById(`node-${row}-${col}`).className = 'node shortest_path';
    }, shortestPathDelay * i);
  }
};

export default animateShortestPath;
