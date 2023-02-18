function palindromOrNot(str){
    
    let n = str.length
    for(let i = 0; i < n/2; i++){    
        if(str[i] != str[n-1-i]){
            return "it is not palindrom"
        }
    }
    return "palindrom"
}

let string = "malayalam"
value = palindromOrNot(string)
console.log(value)