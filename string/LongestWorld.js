function LongestWordC(sen) {
  sen = sen.replace(/[^a-zA-Z ]/gi, "");
  let words = sen.split(" ");
  let LongestWord = words[0];
  for (i = 0; i < words.length; i++) {
    if (words[i].length > LongestWord.length) {
      LongestWord = words[i];
    }
  }
  return LongestWord;
}

console.log(LongestWordC("Heloo hai"));