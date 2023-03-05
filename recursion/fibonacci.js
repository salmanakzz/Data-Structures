function fibonacci() {
    let n1 = 0;
    n2 = 1;
    let next = n1 + n2;
  
    console.log(n1);
    console.log(n2);
  
    let n = 2;
  
    fibonacciHelper(n1, n2, next, n);
  }
  
  fibonacci();
  function fibonacciHelper(n1, n2, next, n) {
    if (n > 9) {
      return;
    }
    if (n <= 9) {
      console.log(next);
    }
    n1 = n2
    n2 = next
    next =n1+n2
    n++;
    fibonacciHelper(n1, n2, next, n);
  }
  