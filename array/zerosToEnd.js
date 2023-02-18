function toEnd(array) {
    let startIdx = 0;
    let endIdx = array.length - 1;
    while (startIdx < endIdx) {
        let temp = array[startIdx];
        array[startIdx] = array[endIdx];
        array[endIdx] = temp;
        startIdx++;
        endIdx--;
      }
    console.log(array);
  }
  toEnd([6, 7, 5, 9]);
  