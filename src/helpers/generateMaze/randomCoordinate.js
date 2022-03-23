import getRandomNumber from '../getRandomNumber';

const randomCoordinate = (min, max, type) => {
  return Math.floor(getRandomNumber(min, max) / 2) * 2 + (type === 'wall' ? 0 : 1);
};

export default randomCoordinate;
