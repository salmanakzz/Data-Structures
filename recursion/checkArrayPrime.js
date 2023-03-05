function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function prime(array) {
    if (array.length === 0) {
      return true;
    }
    if (!isPrime(array[0])) {
      return false;
    }
    return prime(array.slice(1));
  }
  
  let array = [2, 3, 5, 11];
  console.log(prime(array)); // Output: true