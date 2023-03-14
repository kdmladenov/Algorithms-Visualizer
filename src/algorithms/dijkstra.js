import getAllNodes from '../helpers/dijkstra/getAllNodes';
import sortNodesByDistance from '../helpers/dijkstra/sortNodesByDistance';
import updateUnvisitedNeighbors from '../helpers/updateUnvisitedNeighbors';

const dijkstra = (grid, startNode, endNode) => {
  const visitedNodesInOrder = [];

  startNode.distance = 0;

  const unvisitedNodes = getAllNodes(grid);

  while (!!unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    
    const closestNode = unvisitedNodes.shift();
    if (closestNode.isWall) continue; // If we encounter a wall, we skip it.

    if (closestNode.distance === Infinity) return visitedNodesInOrder; // If the closest node is at a distance of infinity,we must be trapped and should therefore stop.

    closestNode.isVisited = true;

    visitedNodesInOrder.push(closestNode);

    if (closestNode === endNode) return visitedNodesInOrder;

    updateUnvisitedNeighbors(closestNode, grid);
  }
};

export default dijkstra;
