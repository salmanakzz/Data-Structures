var HashSet = require('hashset');

let arr = [6,5,4,3,9,8,0];
let n = 10;

let  result = hello(arr,n);

console.log(result);

function hello(arr,n) {
  var nums = new HashSet();
  for(var i=0;i<arr.length;i++) {
    let num = arr[i];
    let match = n - num;
    if(nums.contains(match)) {
      return new Array(num,match)
    }else{
      nums.add(num);
    }
  }
}