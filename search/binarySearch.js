function binarySearch(array, target) {
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx <= endIdx) {
    let middle = Math.round(startIdx + (endIdx - startIdx) / 2);
    if (array[middle] == target) {
      return middle;
    } else if (target < array[middle]) {
      endIdx = middle - 1;
    } else if (target > array[middle]) {
      startIdx = middle + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],2));

function binarySearchRec(array, target) {
  return binarySearchRecHelper(array, target, 0, array.length - 1);
}

function binarySearchRecHelper(array, target, startIdx, endIdx) {
  if (startIdx > endIdx) {
    return -1;
  }

  let middle = Math.round(startIdx + (endIdx - startIdx) / 2);
  if (array[middle] == target) {
    return middle;
  } else if (target < array[middle]) {
    return binarySearchRecHelper(array, target, startIdx, middle - 1);
  } else if (target > array[middle]) {
    return binarySearchRecHelper(array, target, middle + 1, endIdx);
  }
}

console.log(binarySearchRec([1,2,3,4,5,6,7,8,9],10));