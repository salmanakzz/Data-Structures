function a(array) {
  let b = [];
  let includes = false;
  for (let j = 1; j <= array[array.length - 1]; j++) {
    for (let i = 0; i < array.length; i++) {
      if (j == array[i]) {
        includes = true;
        break;
      }
    }
    if (!includes) {
      b.push(j);
    }
    includes = false;
  }
  return b;
}

console.log(a([1, 2, 3, 4, 5]));
