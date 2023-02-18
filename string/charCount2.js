function a(string){
    let charArray = []
    let set = new Set()
  
    for (let i = 0; i < string.length; i++) {
      let count = 1
      if(string[i] != string[i -1]){
        if (!set.has(string[i])) {
          for (let j = i+1; j < string.length; j++) {
            if (string[i] == string[j]) {
              count++
            }
            
          }
          charArray.push(count)
          charArray.push(string[i])
          set.add(string[i])
        }
      }
      
    }
    return charArray.join('')
  }
  
  console.log(a("AAABBCAAA"));
  
  