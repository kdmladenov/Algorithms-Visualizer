import Heuristic from '../helpers/Heuristic';
import visitedNodesInOrderAStar from '../helpers/visitedNodesInOrderAStar';

const AStar = (startNode, endNode, grid) => {
  const newGrid = Heuristic(endNode, grid);
  return visitedNodesInOrderAStar(startNode, newGrid);
};

export default AStar;
