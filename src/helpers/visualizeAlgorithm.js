import depthFirstSearch from '../algorithms/depthFirstSearch';
import dijkstra from '../algorithms/dijkstra';
import aStar from '../algorithms/aStar';
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
  let orderedVisitedNodes = [];

  orderedVisitedNodes =
    selectedAlgorithm === 'Dijkstra'
      ? dijkstra(grid, startNode, endNode)
      : selectedAlgorithm === 'Dept First Search'
      ? depthFirstSearch(grid, startNode, orderedVisitedNodes)
      : selectedAlgorithm === 'A-Star'
      ? aStar(startNode, endNode, grid)
      : null;

  const nodesInShortestPathOrder = getNodesInShortestPathOrder(endNode);

  animateAlgorithmAndShortestPath(orderedVisitedNodes, nodesInShortestPathOrder, animationSpeed);
};

export default visualizeAlgorithm;
