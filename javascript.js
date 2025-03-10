let currentNumber = "";
let previousNumber = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".currentNumber");
const previousDisplayNumber = document.querySelector(".previousNumber");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
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
    operator = pressedOperator;
    previousNumber = currentNumber;
    currentNumber = "";
    previousDisplayNumber.textContent = previousNumber + " " + operator;
    currentDisplayNumber.textContent = "0";
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
        previousNumber = divide(previousNumber, currentNumber);
    }
    previousDisplayNumber.textContent = "0";
    currentDisplayNumber.textContent = previousNumber;
    operator = "";
    currentNumber = "";
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