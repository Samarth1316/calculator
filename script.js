let display = document.getElementById('display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}

function appendOperator(operator) {
  if (previousOperator) {
    calculate();
  }

  previousOperator = operator;
  previousOperand = parseFloat(display.value);
  display.value += operator;
}

function equals() {
  if (previousOperator) {
    calculate();
    previousOperator = null;
  }
}

function calculate() {
  let currentOperand = parseFloat(display.value.slice(display.value.lastIndexOf(previousOperator) + 1));

  switch (previousOperator) {
    case '+':
      display.value = previousOperand + currentOperand;
      break;
    case '-':
      display.value = previousOperand - currentOperand;
      break;
    case '*':
      display.value = previousOperand * currentOperand;
      break;
    case '/':
      if (currentOperand === 0) {
        display.value = "Error";
      } else {
        display.value = previousOperand / currentOperand;
      }
      break;
    case '%':
      display.value = (previousOperand / 100) * currentOperand;
      break;
  }
}

function clearDisplay() {
  display.value = '0';
  previousOperator = null;
  previousOperand = null;
}