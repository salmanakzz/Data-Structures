function change(string, key) {
  let newKey = key % 26;
  let charArray = [];

  for (let i = 0; i < string.length; i++) {

    let letterPosition = string[i].charCodeAt(0) + newKey;
    if (letterPosition <= 122){

        charArray[i] = String.fromCharCode(letterPosition)
    }else{
        charArray[i] = String.fromCharCode(96 + letterPosition % 122)
    }

  }
  return charArray.join('')
}

console.log(change('hai', 2));