function swap(arr, x, y)
{
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

function sortInWave(arr, n)
{
     
    arr.sort((a, b) => a - b);
 
    for(let i = 0; i < n - 1; i += 2)
        swap(arr, i, i + 1);
}
 
let arr = [ 2,3,8,7,1,5,6,10,4];
let n = arr.length;
 
sortInWave(arr, n);
 
for(let i = 0; i < n; i++)
    console.log(arr[i] + " ");
    