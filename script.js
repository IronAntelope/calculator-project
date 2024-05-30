// basic operation logic
function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return a / b};

// declare vars
let numA;
let numB;
let operator;

function operate(numA, numB, operator) {
  switch(operator) {
    case "add":
      return add(numA, numB);
      break;
    case "subtract":
      return subtract(numA, numB);
      break;
    case "multiply":
      return multiply(numA, numB);
      break;
    case "divide":
      return divide(numA, numB);
      break;
  };
};
