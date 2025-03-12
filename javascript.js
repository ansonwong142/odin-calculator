let currentNumber = "";
let previousNumber = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function () {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = "0";
});

const backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", function () {
    if (currentNumber && currentNumber != "0") {
        currentNumber = currentNumber.slice(0, -1);
        currentDisplayNumber.textContent = currentNumber;
        if (!currentNumber){
            currentDisplayNumber.textContent = "0";
        }
    }
});

const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", function () {
    if (!currentNumber.includes(".")) {
        if (currentNumber === "") {
            currentNumber += "0.";
        }
        else {
            currentNumber += ".";
        }
        currentDisplayNumber.textContent = currentNumber;
    }
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    if (previousNumber != "" && currentNumber != "") {
        operate();
    }
});

numberButtons.forEach(button => {
    button.addEventListener("click", e => processNumber(e.target.textContent));
});

function processNumber(number) {
    currentNumber += number;
    currentDisplayNumber.textContent = currentNumber;
}

operatorButtons.forEach(button =>
    button.addEventListener("click", e => processOperator(e.target.textContent))
);

function processOperator(pressedOperator) {
    if (previousNumber === "") {
        previousNumber = currentNumber;
        operator = pressedOperator;
        currentNumber = "";
        //previousDisplayNumber.textContent = previousNumber + " " + operator;
        previousDisplayNumber.textContent = roundDisplayNumber(previousNumber) + " " + operator;
        currentDisplayNumber.textContent = "0";
    }
    else if (currentNumber === "") {
        operator = pressedOperator;
        //previousDisplayNumber.textContent = previousNumber + " " + operator;
        previousDisplayNumber.textContent = roundDisplayNumber(previousNumber) + " " + operator;
        currentDisplayNumber.textContent = "0";
    }
    else {
        operate();
        operator = pressedOperator;
        //previousDisplayNumber.textContent = previousNumber + " " + operator;
        previousDisplayNumber.textContent = roundDisplayNumber(previousNumber) + " " + operator;
        currentDisplayNumber.textContent = "0";
    }
}

function operate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+") {
        previousNumber = add(previousNumber, currentNumber);
    }
    else if (operator === "-") {
        previousNumber = subtract(previousNumber, currentNumber);
    }
    else if (operator === "x") {
        previousNumber = multiply(previousNumber, currentNumber);
    }
    else if (operator === "/") {
        if (currentNumber === 0) {
            previousNumber = "Can't divide by 0";
            previousDisplayNumber.textContent = previousNumber;
            currentDisplayNumber.textContent = "";
            operator = "";
            currentNumber = "";
            return
        }
        previousNumber = divide(previousNumber, currentNumber);
    }
    previousNumber = previousNumber.toString();
    currentDisplayNumber.textContent = roundDisplayNumber(previousNumber);
    previousDisplayNumber.textContent = "";
    operator = "";
    currentNumber = "";
}

function roundDisplayNumber(number) {
    if (number.length < 10) {
        return number;
    }
    else {
        return number.slice(0, 9) + "...";
    }
}



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}