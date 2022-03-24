import heuristic from '../helpers/aStar/heuristic';
import visitedNodesInOrderAStar from '../helpers/aStar/visitedNodesInOrderAStar';

const aStar = (startNode, endNode, grid) => {
  const newGrid = heuristic(endNode, grid);
  return visitedNodesInOrderAStar(startNode, newGrid);
};

export default aStar;
