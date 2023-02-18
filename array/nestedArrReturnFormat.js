const arr = [  "1.mp3","2.mp3","3.mp4",[" 5.pdf","6.mp6",["1.mp3","2.mp3","3.mp4"  ] ] ]

let final = []
function mp3Elements(array, format,final){

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      mp3Elements(array[i],format, final)
    }else{
      if (array[i].includes(format)) {
        
        final.push(array[i])
      }

    }

  }

}

mp3Elements(arr,"mp3",final)
console.log(final);