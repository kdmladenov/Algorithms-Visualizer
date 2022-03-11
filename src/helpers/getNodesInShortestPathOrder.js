// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the dijkstra method above.
const getNodesInShortestPathOrder = (endNode) => {
  const nodesInShortestPathOrder = [];
  let currentNode = endNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
};

export default getNodesInShortestPathOrder;
