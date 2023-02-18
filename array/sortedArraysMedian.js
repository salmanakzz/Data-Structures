function a(array1, array2) {
  let array1Item = array1[0];
  let array2Item = array2[0];
  let meged = [];

  let i = 1;
  let j = 1;

  let m = 0;
  let n = array1.length + array2.length - 1;

  while (array1Item || array2Item || array2Item === 0 || array1Item === 0) {
    if (array2Item === array1Item) {
      meged.push(array1Item);
      array1Item = array1[i];
      i++;
      meged.push(array2Item);
      array2Item = array2[j];
      j++;
    } else if (array1Item < array2Item) {
      meged.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      meged.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(meged);
  while (m <= n) {
    if (m === n) {
      return console.log(meged[m]);
    } else if (m !== n && m + 1 === n && n - 1 === m) {
      return console.log((meged[m] + meged[n]) / 2);
    }
    m++;
    n--;
  }
}

a([1,3], [4, 5]);
