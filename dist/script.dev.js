"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var numberBtns = document.querySelectorAll(".key--number");
console.log(numberBtns);
var operatorBtns = document.querySelectorAll(".key--operator");
console.log(operatorBtns);
var equalsBtn = document.querySelector(".key--equals");
console.log(equalsBtn);
var displayCalc = document.querySelector("#calc");
console.log(displayCalc);
var calc = document.querySelector("#result");
var clearBtn = document.querySelector(".key--clear");
var dotBtn = document.querySelector(".key--decimal");
console.log(dotBtn);
var delBtn = document.querySelector(".key--delete");
console.log(delBtn);
var initialNumber = "";
var operator = "";
var secondaryNumber = "";
numberBtns.forEach(function (number) {
  console.log(number);
  number.addEventListener("click", function (event) {
    initialNumber += event.target.innerText;
    displayCalc.innerText = initialNumber;
    console.log("The current initialNumber is ".concat(initialNumber));
  });
});
operatorBtns.forEach(function (operatorBtn) {
  console.log(operatorBtn);
  operatorBtn.addEventListener("click", function (event) {
    operator = event.target.innerText;
    displayCalc.innerText = operator;
    console.log("The current operator is ".concat(operator));
    secondaryNumber = initialNumber;
    initialNumber = "";
  });
});

var appendDecimals = function appendDecimals() {
  console.log(_typeof(initialNumber));

  if (!initialNumber.includes(".")) {
    initialNumber += ".";
    displayCalc.innerHTML = initialNumber;
  }
};

var sum = function sum() {
  var total = 0;
  console.log("Calculate button clicked");
  console.log("Initial Number : ".concat(initialNumber, ", Operator Value: ").concat(operator, ", secondaryNumber: ").concat(secondaryNumber));

  if (operator === "+") {
    total = parseFloat(secondaryNumber) + parseFloat(initialNumber);
    return displayCalc.innerHTML = total;
  } else if (operator === "*") {
    total = parseFloat(secondaryNumber) * parseFloat(initialNumber);
    return displayCalc.innerHTML = total;
  } else if (operator === "/") {
    total = parseFloat(secondaryNumber) / parseFloat(initialNumber);
    return displayCalc.innerHTML = total;
  } else if (operator === "%") {
    console.log("percentage clicked");
    total = parseFloat(secondaryNumber) / parseFloat(initialNumber) * 100;
    return displayCalc.innerHTML = total;
  } else if (operator === "-") {
    total = parseFloat(secondaryNumber) - parseFloat(initialNumber);
    return displayCalc.innerHTML = total;
  } else {
    return "invalid input";
  }
}; //Clear button


var resetCalculator = function resetCalculator() {
  displayCalc.innerHTML = "";
  initialNumber = "";
  secondaryNumber = "";
  operator = "";
  console.log("reset calculation function ran");
};

var deleteLastDigit = function deleteLastDigit() {
  initialNumber = displayCalc.innerHTML;
  var newNumber = initialNumber.slice(0, initialNumber.length - 1);
  displayCalc.innerHTML = newNumber;
};

clearBtn.addEventListener("click", resetCalculator);
equalsBtn.addEventListener("click", sum);
dotBtn.addEventListener("click", appendDecimals);
delBtn.addEventListener("click", deleteLastDigit);