let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === "" && previousInput === "") return;
    
    if (previousInput !== "") {
        calculateResult();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function calculatePercentage() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }
}

function calculateResult() {
    if (!previousInput || !currentInput) return;

    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": 
            if (num2 === 0) {
                display.value = "Error";
                return;
            }
            result = num1 / num2; 
            break;
    }

    currentInput = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    previousInput = "";
    operator = "";
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || previousInput || "0";
}
