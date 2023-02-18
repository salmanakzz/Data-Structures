function removespaces(str){
    let arr = str.split("")
    let finalString = ''
    for (let i = 0; i < string.length; i++) {
      if (arr[i] === " " &&arr[i+1] !== " " && finalString.length > 0) {
        finalString += ' '
      }else if (arr[i] !== " "){
        finalString += arr[i]
      }
      
    }
    console.log(finalString);
  }
  
  let string = "hello  amal      how   are   you "
  let result = removespaces(string)
  // console.log(result)
   