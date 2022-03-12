import animateShortestPath from './animateShortestPath';

const animateAlgorithmAndShortestPath = (
  visitedNodesInOrder,
  nodesInShortestPathOrder,
  animationSpeed
) => {
  for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    if (i === visitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
      }, i * (100 / animationSpeed));
      return;
    }
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      document.getElementById(`node-${node.row}-${node.col}`).className = 'node visited';
    }, i * (100 / animationSpeed));
  }
};

export default animateAlgorithmAndShortestPath;
