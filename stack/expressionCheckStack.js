function isParenthesisMatching(expression) {
    let stack = [];
  
    for (let index = 0; index < expression.length; index++) {
      const element = expression[index];
      
      if (element === '(' || element === '[' || element === '{') {
        stack.push(element);
      } else if (element === ')' && stack[stack.length - 1] === '(' ||
      element === ']' && stack[stack.length - 1] === '[' ||
      element === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
      console.log(stack);
    }
    
    return stack.length === 0;
  }
  
  console.log(isParenthesisMatching("{[]}"));
  