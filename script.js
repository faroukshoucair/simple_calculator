let calcInputs = document.querySelector(".calc-inputs");
let calcOutput = document.querySelector(".calc-output");
currentNumber = "";
prevNumber = "";
decimalNumber = "";
operator = "";
calcInputs.addEventListener("click", function () {
  input = event.target.innerText;
  switch (input) {
    case "0":
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
      //currentNumber would be an empty string after operator is entered
      console.log(currentNumber);
      if (currentNumber === "") {
        currentNumber = "0";
        console.log(prevNumber);
        calcOutput.value = prevNumber + operator;
        prevNumber = prevNumber.substring(0, prevNumber.length);
        calcOutput.value = prevNumber;
        console.log(prevNumber);
      }
      else {
        currentNumber = currentNumber.substring(0, currentNumber.length - 1);
        calcOutput.value = currentNumber;
      }

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
      calcOutput.value = prevNumber + operator + "(" + currentNumber + ")";
      break;
    case "=":
      if (operator === "+") {
        currentNumber = add(prevNumber, currentNumber);
      }
      else if (operator === "-") {
        currentNumber = subtract(prevNumber, currentNumber);
      }
      else if (operator === "×") {
        currentNumber = multiply(prevNumber, currentNumber);
      }
      else if (operator === "%") {
        currentNumber = modulo(prevNumber, currentNumber);
      }
      else {
        currentNumber = divide(prevNumber, currentNumber);
      }
      prevNumber = "";
      operator = "";
      break;
    default:
      break;
  }
});

/*
let currentNumber = "";
let inputStatement = [];
let operators = [];
calcInputs.addEventListener("click", function () {
  input = event.target.innerText;
  switch (input) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "÷":
    case "×":
    case "-":
    case "+":
    case "%":
    case ".":
      if (input === "×" || input === "-" || input === "+" || input === "÷" || input === "%") {
        inputStatement.push(currentNumber);
        inputStatement.push(input);
        calcOutput.value = inputStatement.join("");
        currentNumber = "";
      }
      else {
        currentNumber += input;
        calcOutput.value = inputStatement.join("") + currentNumber;
      }
      break;
    case "⌫":
      if (currentNumber !== "") {
        console.log(currentNumber);
        currentNumber = currentNumber.slice(0, -1);
        console.log(currentNumber);
        calcOutput.value = inputStatement.join("") + currentNumber;
      }
      else {
        lastToken = inputStatement.at(inputStatement.length);
        if (lastToken !== "+" || lastToken !== "-" || lastToken !== "×" || lastToken !== "÷" || lastToken !== "%") {
          currentNumber = lastToken;
          currentNumber = currentNumber.slice(0, -1);
          console.log(currentNumber);
          calcOutput.value = inputStatement.join("") + currentNumber;
        }
        else {
          console.log(inputStatement);
          inputStatement.pop();
          console.log(inputStatement);
          calcOutput.value = inputStatement.join("");
        }
      }
      break;
    case "AC":
      inputStatement = [];
      calcOutput.value = inputStatement.join("");
      break;
    case "+/-":
      let num = parseFloat(inputStatement.at(inputStatement.length));
      inputStatement.pop();
      inputStatement.push("(" + (num * -1) + ")");
      calcOutput.value = inputStatement.join("");
      break;
    case "=":
      inputStatement.push(currentNumber);
    default:
      break;


  }
});*/


function add(a, b) {
  let ans = parseFloat(a) + parseFloat(b);
  calcOutput.value = ans;
  return ans;
}

function subtract(a, b) {
  let ans = parseFloat(a) - parseFloat(b);
  calcOutput.value = ans;
  return ans;
}

function multiply(a, b) {
  let ans = parseFloat(a) * parseFloat(b);
  calcOutput.value = ans;
  return ans;
}

function divide(a, b) {
  let ans = parseFloat(a) / parseFloat(b);
  calcOutput.value = ans;
  return ans;
}

function modulo(a, b) {
  let ans = parseFloat(a) % parseFloat(b);
  calcOutput.value = ans;
  return ans;
}
