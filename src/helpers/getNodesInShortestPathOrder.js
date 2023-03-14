const getNodesInShortestPathOrder = (endNode) => {
  const nodesInShortestPathOrder = [];

  let currentNode = endNode;

  while (currentNode) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  
  return nodesInShortestPathOrder;
};

export default getNodesInShortestPathOrder;
