const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for(let x = 0; x < matrix.length; x++){
    for(let y = 0; y < matrix[x].length; y++){
      if(x > 0 && matrix[x-1][y] === 0){
        continue
      }
      result += matrix[x][y]
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
