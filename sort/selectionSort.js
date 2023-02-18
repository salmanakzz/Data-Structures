function selectionSort(array){
    for (let i = 0; i < array.length - 1 ; i++) {
       let small = i
        for (let j = i; j < array.length ; j++) {
            if (array[j] < array[small]) {
                small = j
            } 
        }
        let temp = array[i]
        array[i] = array[small]
        array[small] = temp
    }
    return console.log(array);
}

selectionSort([3,4,6,2,1])