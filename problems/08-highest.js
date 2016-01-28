'use strict';

module.exports = function highest(numArray) {
  return numArray.reduce(function(prev, elem){
    if (typeof elem === 'number') {
      if(prev === null){
        prev = elem;
        return elem;
      } else if(elem > prev){
        return prev + elem;
      }
    }
    return prev;
  }, null); //null > -2
};
