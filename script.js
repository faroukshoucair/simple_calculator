let calcInputs = document.querySelector(".calc-inputs");
let calcOutput = document.querySelector(".calc-output");
currentNumber = "";
prevNumber = "";
decimalNumber = "";
operator = "";
calcInputs.addEventListener("click", function () {
  input = event.target.innerText;
  switch (input) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (currentNumber === "0") {
        currentNumber = "";
      }
      currentNumber += event.target.innerText;
      calcOutput.value = prevNumber + operator + currentNumber;
      break;
    case "÷":
    case "×":
    case "-":
    case "+":
    case "%":
      prevNumber = currentNumber;
      operator = event.target.innerText;
      calcOutput.value = currentNumber + operator;
      currentNumber = "";
      break;
    case "⌫":
      currentNumber = currentNumber.substring(0, currentNumber.length - 1);
      if (currentNumber === "") {
        currentNumber = "0";
      }
      calcOutput.value = currentNumber;
      break;
    case "AC":
      currentNumber = "";
      prevNumber = "";
      operator = "";
      calcOutput.value = "0";
      break;
    case ".":
      if (currentNumber.includes(".")) {
        break;
      }
      currentNumber += ".";
      calcOutput.value = currentNumber;
      break;
    case "+/-":
      currentNumber = currentNumber * -1;
      calcOutput.value = currentNumber;
      break;
    case "=":
      if (operator === "+") {
        add(prevNumber, currentNumber);
      }
      else if (operator === "-") {
        subtract(prevNumber, currentNumber);
      }
      else if (operator === "×") {
        multiply(prevNumber, currentNumber);
      }
      else if (operator === "%") {
        modulo(prevNumber, currentNumber);
      }
      else {
        divide(prevNumber, currentNumber);
      }
      currentNumber = "";
      prevNumber = "";
      operator = "";
      break;
    default:
      break;
  }
});


function add(a, b) {
  let ans = parseFloat(a) + parseFloat(b);
  calcOutput.value = ans;
}

function subtract(a, b) {
  let ans = parseFloat(a) - parseFloat(b);
  calcOutput.value = ans;
}

function multiply(a, b) {
  let ans = parseFloat(a) * parseFloat(b);
  calcOutput.value = ans;
}

function divide(a, b) {
  let ans = parseFloat(a) / parseFloat(b);
  calcOutput.value = ans;
}

function modulo(a, b) {
  let ans = parseFloat(a) % parseFloat(b);
  calcOutput.value = ans;
}
