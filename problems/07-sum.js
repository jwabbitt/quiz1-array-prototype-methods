'use strict';

module.exports = function sum(numArray) {
  return numArray.reduce(function(prev, elem){
    if (typeof elem === 'number') {
      return prev + elem;
    }
    return prev;
  }, 0);
};
