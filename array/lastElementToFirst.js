function lastElementToFirst(arr){
    const lastValue = arr[arr.length-1]
    for(i = arr.length-2; i >=0 ;i--){
        arr[i+1] = arr[i]
    }
    arr[0] = lastValue
    return arr

}

let array = [1,2,3,8,2,5,6,7,5]
const result = lastElementToFirst(array)
console.log(result)