let arr = [4, 5, 9, 0, 2, 4, 1, 3, 7];

function a(arr) {
  let middle = Math.round(arr.length / 2);
  let k = 1;
  let i = middle - 1;
  let j = arr.length - 1;

  while (k <= arr.length + 1) {
    if (i >= 0) {
      console.log(arr[i]);
      i--;
    }
    if (i == -1 && j >= middle - 1) {
      console.log(arr[j]);
      j--;
    }

    k++;
  }
}

a(arr);
