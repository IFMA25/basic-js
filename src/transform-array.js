const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = [];

  arr.forEach((item, index)=> {

    if(item === '--double-next'){
      if(index+1 < arr.length){
        result.push(arr[index+1])
      }
    }
    else if(item === '--double-prev'){
      if(index-1 >=0){
        result.push(arr[index-1])
      }
    }
    else if(item === '--discard-next'){
      if(index+1 < arr.length){
        arr[index+1] = undefined
      }
    }
    else if(item === '--discard-prev'){
      if(index-1 >=0)
      result.pop();
    }
    else{
      result.push(item)
    }
  });
  result = result.filter(el => el !== undefined)
  return result
}

module.exports = {
  transform
};
