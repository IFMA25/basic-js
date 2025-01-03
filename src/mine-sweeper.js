const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  const x = matrix.length;
  const y = matrix[0].length;
  const result = Array.from({ length: x }, () => Array(y).fill(0));

  for (let xi = 0; xi < x; xi++) {
    for (let yj = 0; yj < y; yj++) {
      if (matrix[xi][yj] === true) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newX = xi + i;
            const newY = yj + j;
            if (newX >= 0 && newX < x && newY >= 0 && newY < y && !(newX === xi && newY === yj)) {
              result[newX][newY] += 1;
            }
          }
        }
      }
    }
  }
    return result;
}

module.exports = {
  minesweeper
};
