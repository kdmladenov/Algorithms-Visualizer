import dijkstra from '../algorithms/dijkstra';
import animateDijkstra from './animateDijkstra';
import getNodesInShortestPathOrder from './getNodesInShortestPathOrder';

const visualizeAlgorithm = (grid, startRow, startCol, endRow, endCol) => {
  const startNode = grid[startRow][startCol];
  const endNode = grid[endRow][endCol];
  const orderedVisitedNodes = dijkstra(grid, startNode, endNode);
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
  animateDijkstra(orderedVisitedNodes, nodesInShortestPathOrder);
};

export default visualizeAlgorithm;
