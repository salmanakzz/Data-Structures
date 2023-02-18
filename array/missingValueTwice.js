function s(arr) {
    let sum = 0
    let total = 0;
    let duplicate;
  
    for (let i = 0; i < array.length; i++) {
     total += i+1
      let j;
      for (j = 0; j < i; j++) {
        if (array[i] === array[j]) {
          duplicate = array[i]
          break;
        }
      }
      if (i === j) {
        sum += arr[i]
      }
    }
  console.log(duplicate, total-sum);
  }
  
  let array = [2,2];
  
  s(array);