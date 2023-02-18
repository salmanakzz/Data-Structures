function stringReverse(str){
    let reversed=''
    for(i = str.length-1; i>=0; i--){
        reversed += str.charAt(i)
    }
    return reversed
    
}

let string = "hello"
let result = stringReverse(string)
console.log(result)