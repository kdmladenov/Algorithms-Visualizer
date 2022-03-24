const updateAStarDistance = (leastValueNode, currentNode) => {
  currentNode.previousNode = leastValueNode;
  currentNode.distance = leastValueNode.distance + 1;
  currentNode.distAStar = currentNode.distance + currentNode.manhattanDist;

  return currentNode;
};

export default updateAStarDistance;
