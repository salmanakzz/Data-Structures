//way 1
function printDistinct(arr, n) {
  for (let i = 0; i < n; i++) {
    var j;
    for (j = 0; j < i; j++)
      if (arr[i] == arr[j]) {
        break;
      }

    if (i == j) console.log(arr[i] + " ");
  }
}

arr = new Array(6, 6, 6, 6, 3, 3, 3);
n = arr.length;
printDistinct(arr, n);


// way 2
function printDistinct(arr, n) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    while (i < n - 1 && arr[i] == arr[i + 1]) i++;

    document.write(arr[i] + " ");
  }
}

let arr = [6, 10, 5, 4, 9, 120, 4, 6, 10];
let n = arr.length;
printDistinct(arr, n);
