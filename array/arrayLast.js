let arr = [6,1,6,8,10,4,15,6,3,9,6]

 for (let i = 0; i < arr.length; i++) {
     
     for (let j = arr.length-1; j >= i; j--) {
         
        if (arr[i] == 6 && arr[j] != 6) {
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
         
     }

}

console.log(arr);