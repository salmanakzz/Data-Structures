function removespaces(str){
    let values = ""
    let finalString = ""
    for(i = 0; i < str.length; i++){
        if(str.charAt(i)!=" " && i != str.length - 1){
            values = values + str[i]
        }else{
            if(i == str.length - 1)  values = values + str[i]
            if(values){
                if(finalString){
                    finalString = finalString + " " + values
                }else{
                    finalString = values
                }
            }
            values = ""
        }
    }
    return finalString
}

let string = "hello  ashik      how   are   you "
let result = removespaces(string)
console.log(result)
