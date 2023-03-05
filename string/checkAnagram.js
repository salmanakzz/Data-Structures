function anagram(str1,str2){
  let str1Leng = str1.length
  let str2Leng = str2.length

  if (str1Leng !== str2Leng) {
    return console.log("Invalid input");
  }

  let charArr1 = str1.split("").sort().join("")
  let charArr2 = str2.split("").sort().join("")
  console.log(charArr1,charArr2);

  if (charArr1 === charArr2) {
    return true
  }else{
    return false
  }
}

console.log(anagram("india","iaind"));