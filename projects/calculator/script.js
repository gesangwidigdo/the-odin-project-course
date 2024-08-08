const displayNumber = document.querySelector('.display-number');
displayNumber.textContent = '0';
let currentInput = '';
let operator = '';
let previousInput = '';

const MAX_DISPLAY_LENGTH = 12;

function updateDisplay(value) {
  if (value === `Can't divide by 0`) {
    displayNumber.classList.add('error')
  } else {
    displayNumber.classList.remove('error');
  }

  if (value.length > MAX_DISPLAY_LENGTH) {
    value = value.slice(0, MAX_DISPLAY_LENGTH);
  }
  
  displayNumber.textContent = value;
}

function inputNumber(event) {
  const value = this.value;
  console.log(value);

  if (value >= '0' && value <= '9' || value === '.') {
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    updateDisplay(currentInput);
  } else if (value === 'C') {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay('0');
  } else if (value === 'del') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0')
  } else if (value === 'posneg') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay(currentInput);
  } else if (['+', '-', '*', '/'].includes(value)) {
    if (previousInput && operator && currentInput) {
      const result = operate(previousInput, operator, currentInput);
      updateDisplay(result)
      previousInput = result.toString();
      currentInput = '';
    } else {
      previousInput = currentInput;
      currentInput = '';
    }
    operator = value;
  } else if (value === '=') {
    if (operator && previousInput) {
      const result = operate(previousInput, operator, currentInput);
      updateDisplay(result);
      previousInput = '';
      operator = '';
      currentInput = result;
    }
  }
}

let operate = (num1, operator, num2) => {
  let res;
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  switch (operator) {
    case '+':
      res = num1 + num2
      break;
    case '-':
      res = num1 - num2
      break;
    case '*':
      res = num1 * num2
      break;
    
    case '/':
      if (num2 === 0) {
        return `Can't divide by 0`;
      }
      res = num1 / num2
      break;
    default:
      break;
  }
  res = Math.round(res * 1e10) / 1e10;
  return res;
}

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', inputNumber)
});