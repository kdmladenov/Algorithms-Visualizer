import Heuristic from '../helpers/Heuristic';
import visitedNodesInOrderAStar from '../helpers/visitedNodesInOrderAStar';

const aStar = (startNode, endNode, grid) => {
  const newGrid = Heuristic(endNode, grid);
  return visitedNodesInOrderAStar(startNode, newGrid);
};

export default aStar;
