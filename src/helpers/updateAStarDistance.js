const updateAStarDistance = (leastValueNode, currentNode) => {
  currentNode.previousNode = leastValueNode;
  currentNode.distance = leastValueNode.distance + 1;
  currentNode.distAstar = currentNode.distance + currentNode.heuristicDist;
  return currentNode;
};

export default updateAStarDistance;
