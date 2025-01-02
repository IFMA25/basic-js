const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  make: [],

  getLength() {
    return this.make.length;
  },
  addLink(value) {
    if(value === undefined){
      this.make.push('( )');
    } else{
      this.make.push(`( ${String(value)} )`);
    }
    return this
  },
  removeLink(position) {
    if(position === undefined || isNaN(position) || !Number.isInteger(position) || position < 1 || position > this.make.length){
      this.make = [];
      throw new Error("You can't remove incorrect link!");
    } 
    this.make.splice((position-1), 1);
    return this
  },
  reverseChain() {
    this.make.reverse();
    return this
  },
  finishChain() {
    const result = this.make.join('~~');
    this.make = [];
    return result
  }
};

module.exports = {
  chainMaker
};
