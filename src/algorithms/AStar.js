import heuristic from '../helpers/heuristic';
import visitedNodesInOrderAStar from '../helpers/visitedNodesInOrderAStar';

const aStar = (startNode, endNode, grid) => {
  const newGrid = heuristic(endNode, grid);
  return visitedNodesInOrderAStar(startNode, newGrid);
};

export default aStar;
