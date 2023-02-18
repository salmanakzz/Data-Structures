function sortString(str){
    let arr = []
    let newStr = ''
    for(i = 0; i < str.length; i++){
        arr[i] = str[i]
    }
    for(i = 0; i < arr.length-1; i++){
        for(j =0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }          
        }    
    }  
    for(i = 0; i < arr.length; i++)
    newStr = newStr + arr[i]
    return newStr
}

let str = "gfedcba"
let result = sortString(str)
console.log(result)
