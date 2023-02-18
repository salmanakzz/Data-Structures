function quiksort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        
    }
    return[...quiksort(left),pivot,...quiksort(right)]
}
const arr=[8,12,4,5,3,15,13,12]
console.log(quiksort(arr));