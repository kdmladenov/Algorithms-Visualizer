import depthFirstSearch from '../algorithms/depthFirstSearch';
import dijkstra from '../algorithms/dijkstra';
import { AStar } from '../algorithms/AStar';
import animateAlgorithmAndShortestPath from './animateAlgorithmAndShortestPath';
import getNodesInShortestPathOrder from './getNodesInShortestPathOrder';

const visualizeAlgorithm = (
  selectedAlgorithm,
  grid,
  startRow,
  startCol,
  endRow,
  endCol,
  animationSpeed
) => {
  const startNode = grid[startRow][startCol];
  const endNode = grid[endRow][endCol];

  const orderedVisitedNodes =
    selectedAlgorithm === 'Dijkstra'
      ? dijkstra(grid, startNode, endNode)
      : selectedAlgorithm === 'Dept First Search'
      ? depthFirstSearch(grid, startNode)
      : selectedAlgorithm === 'A-Star'
      ? AStar(startNode, endNode, grid)
      : null;
      
  const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);
  animateAlgorithmAndShortestPath(orderedVisitedNodes, nodesInShortestPathOrder, animationSpeed);
};

export default visualizeAlgorithm;
