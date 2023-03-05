let str = "I think twice,code once";

function wordReverse(str) {
  let stringArr = str.split(" ");
  let final = "";
  let lastWord = stringArr.length - 1;

  for (let i = 0; i < stringArr.length - 1; i++) {
    for (let j = stringArr[i].length - 1; j >= 0; j--) {
      final += stringArr[i].charAt(j);
    }
    if (lastWord !== i) {
      final += " ";
    }
  }
  return console.log(final);
}
wordReverse(str);
