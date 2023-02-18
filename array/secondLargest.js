function secondLargest(arr){
    let largest = 0;
    let secondLargest = 0;
    for(i = 0;i<arr.length;i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    console.log(secondLargest)
    return secondLargest

}
let arr = [2,45,1000,100,30,500]
secondLargest(arr)