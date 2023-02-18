function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i -1; j++){
           if (array[j+1] < array[j]) {
            let temp = array[j]
            array[j] = array[j +1]
            array[j + 1] = temp
           }
        }
        
    }
    return array
}

console.log(bubbleSort([2,4,6,3,1]));