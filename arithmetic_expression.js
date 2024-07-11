function evaluateExpression(expression) {
  let result = 0;
  let operator = '+';
  let temp = '';

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+' || expression[i] === '-') {
      if (operator === '+') {
        result += parseInt(temp);
      } else {
        result -= parseInt(temp);
      }
      operator = expression[i];
      temp = '';
    } else {
      temp += expression[i];
    }
  }

  if (operator === '+') {
    result += parseInt(temp);
  } else {
    result -= parseInt(temp);
  }

  return result;
}

console.log(evaluateExpression("2+3"));
