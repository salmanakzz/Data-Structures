// AAABBC => 3A2B1C

function numberString(string) {
  let charArray = [];

  for (let i = 0; i < string.length; i++) {
    let count = 1;

    if (string[i] != string[i - 1]) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] == string[j]) {
          count = count + 1;
        }
      }
      charArray.push(count);
      charArray.push(string[i]);
    }
  }
  return charArray.join("");
}

console.log(numberString("AAABBC"));
