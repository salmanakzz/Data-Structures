function mergeSortedArrays(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    if(array1 === 0){
        return console.log(array2); 
    }
    if(array2 === 0){
        return console.log(array1);
    }

    while(array1Item || array2Item){
        if(!array2Item || array1Item<array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return console.log(mergedArray);
}

mergeSortedArrays([2,69,73,96],[1,48,74])