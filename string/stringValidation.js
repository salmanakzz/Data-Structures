// 1. 4 <= string <=25
// 2. must start with a letter
// 3. it omly contains letters numbers and underscore
// 4. not end with underscore

function stringValidation(str) {
  let firstChar = str.charAt(0);
  let lastChar = str.charAt(str.length - 1);

  if (
    str.length >= 4 &&
    str.length <= 25 &&
    firstChar.match(/[a-z]/i) &&
    str.match("^[A-Za-z0-9_]*$") &&
    !lastChar.match(/_/i)
  ) {
    str = true;
  } else {
    str = false;
  }

  return str;
}

console.log(stringValidation("aa"));
