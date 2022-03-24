const numberBtns = document.querySelectorAll(".key--number");
console.log(numberBtns);
const operatorBtns = document.querySelectorAll(".key--operator");
console.log(operatorBtns);
const equalsBtn = document.querySelector(".key--equals");
console.log(equalsBtn);
const displayCalc = document.querySelector("#calc");
console.log(displayCalc);
const calc = document.querySelector("#result");
const clearBtn = document.querySelector(".key--clear");
const dotBtn = document.querySelector(".key--decimal");
console.log(dotBtn);
const delBtn = document.querySelector(".key--delete");
console.log(delBtn);

let initialNumber = "";
let operator = "";
let secondaryNumber = "";

numberBtns.forEach((number) => {
  console.log(number);
  number.addEventListener("click", (event) => {
    initialNumber += event.target.innerText;
    displayCalc.innerText = initialNumber;
    console.log(`The current initialNumber is ${initialNumber}`);
  });
});

operatorBtns.forEach((operatorBtn) => {
  console.log(operatorBtn);
  operatorBtn.addEventListener("click", (event) => {
    operator = event.target.innerText;
    displayCalc.innerText = operator;
    console.log(`The current operator is ${operator}`);
    secondaryNumber = initialNumber;
    initialNumber = "";
  });
});

const appendDecimals = () => {
  console.log(typeof initialNumber);
  if (!initialNumber.includes(".")) {
    initialNumber += ".";
    displayCalc.innerHTML = initialNumber;
  }
};

const sum = () => {
  let total = 0;
  console.log("Calculate button clicked");
  console.log(
    `Initial Number : ${initialNumber}, Operator Value: ${operator}, secondaryNumber: ${secondaryNumber}`
  );

  if (operator === "+") {
    total = parseFloat(secondaryNumber) + parseFloat(initialNumber);
    return (displayCalc.innerHTML = total);
  } else if (operator === "*") {
    total = parseFloat(secondaryNumber) * parseFloat(initialNumber);
    return (displayCalc.innerHTML = total);
  } else if (operator === "/") {
    total = parseFloat(secondaryNumber) / parseFloat(initialNumber);
    return (displayCalc.innerHTML = total);
  } else if (operator === "%") {
    console.log("percentage clicked");
    total = (parseFloat(secondaryNumber) / parseFloat(initialNumber)) * 100;
    return (displayCalc.innerHTML = total);
  } else if (operator === "-") {
    total = parseFloat(secondaryNumber) - parseFloat(initialNumber);
    return (displayCalc.innerHTML = total);
  } else {
    return "invalid input";
  }
};

//Clear button

const resetCalculator = () => {
  displayCalc.innerHTML = "";
  initialNumber = "";
  secondaryNumber = "";
  operator = "";
  console.log("reset calculation function ran");
};

const deleteLastDigit = () => {
  initialNumber = displayCalc.innerHTML;
  let newNumber = initialNumber.slice(0, initialNumber.length - 1);
  displayCalc.innerHTML = newNumber;
};

clearBtn.addEventListener("click", resetCalculator);
equalsBtn.addEventListener("click", sum);
dotBtn.addEventListener("click", appendDecimals);
delBtn.addEventListener("click", deleteLastDigit);
