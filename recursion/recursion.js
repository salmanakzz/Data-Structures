// factorail of 5 => 120

function factorail(num){
    if(num <= 1){
        return 1;
    }
    return num * factorail(num-1)
}

let result = factorail(5)

console.log(result)