const sortNodesByDistance = (unvisitedNodes) =>
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);

export default sortNodesByDistance;
