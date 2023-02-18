const reverseArray = (arr,size) =>{
    let start = 0;
    let end = size-1;
    while(start<end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++;                    
        end--;
    }
    console.log(arr)
}

const array = [10,20,30,40,50]
reverseArray(array,array.length)