const toSort = require('../toSort');

//recursive solution with callback for sorting
const mergeSortRecursive = (array, callback = (a, b) => a < b) => {
  //split recursively down to arrays of 1 item
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right, callback);
};

function merge(arr1, arr2, callback) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (callback(arr1[i], arr2[j])) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

module.exports = mergeSortRecursive;
