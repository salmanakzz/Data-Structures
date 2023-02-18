

const merge=(leftarr,rightarr)=>{
  const output=[]
  let leftindex=0
  let rightindex=0

  while(leftindex<leftarr.length && rightindex<rightarr.length){
      const leftEl=leftarr[leftindex]
      const rightEl=rightarr[rightindex]

      if(leftEl>rightEl){
          output.push(leftEl)
          leftindex++
      }else{
          output.push(rightEl);
          rightindex++
      }

  }
  return[...output,...leftarr.slice(leftindex),...rightarr.slice(rightindex)]

}
const mergesort = array=>{
  if (array.length<=1){
      return array;
  }

  const middleindex=Math.floor(array.length/2);
  const leftarr=array.slice(0,middleindex);
  const rightarr=array.slice(middleindex);

  return merge(
      mergesort(leftarr),
      mergesort(rightarr)
  )
}
console.log(mergesort([4,3,2,6,1]));