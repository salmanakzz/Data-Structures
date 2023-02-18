let array = [[[[[[[[[[[[[[[[[1,2,3,[[[[[[[[[[[[[[[5,6,7,[[[[[[[[[[[[[[[[[[[[[[[[9,[9]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],8,45]
let arr2 = []
function answer(array,arr2){
   
    
    for(let i = 0; i< array.length; i++){
     
        if(Array.isArray(array[i])){
            answer(array[i],arr2)
        }else{
            console.log(array[i])
            arr2.push(array[i])
        }
    }
    return arr2
}

console.log(answer(array,arr2))