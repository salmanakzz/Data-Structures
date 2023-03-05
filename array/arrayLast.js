// way 1

let arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];

for (let i = 0; i < arr.length; i++) {
  for (let j = arr.length - 1; j >= i; j--) {
    if (arr[i] == 6 && arr[j] != 6) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}

console.log(arr);

//way 2

function arrayLast(array) {
  let i = 0;
  let j = array.length - 1;

  while (j > i) {
    if (array[i] !== 0 && array[j] === 0) {
      j--;
      i++;
    }
    if (array[i] === 0 && array[j] !== 0) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
    if (array[i] === 0 && array[j] === 0) {
      j--;
    }
    if (array[i] !== 0 && array[j] !== 0) {
      j--;
      i++;
    }
  }

  return array;
}

console.log(arrayLast([0, 2, 0, 1, 3, 8, 9, 0, 2]));
