const toSort = require('../toSort');

const mergeSortIterative = (array, callback = (a, b) => a < b) => {
  const iterations = Math.log2(array.length);
  console.log(iterations);
};

module.exports = mergeSortIterative;
