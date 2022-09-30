// ADD
function add(a, b) {
    return a + b;
}

// SUBTRACT
function subtract(a, b) {
    return a - b;
}

// MULTIPLY
function multiply(a, b) {
    return a * b;
}

// DIVIDE
function divide(a, b) {
    return a / b;
}

// OPERATE
function operate(operator, a, b) {
    if (operator == add) {
        return add(a, b);
    } else if (operator == subtract) {
        return subtract(a, b);
    } else if (operator == multiply) {
        return multiply(a, b);
    } else if (operator == divide) {
        return divide(a, b);
    }
}

// DISPLAY
let currentValue = '';
let previousValue = '';
let operator = '';

document.addEventListener('DOMContentLoaded', function() {
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let numbers = document.querySelectorAll('.digit');
    let operators = document.querySelectorAll('.operator');
    let previousScreen = document.querySelector('.previous');  
    let currentScreen = document.querySelector('.current');

    numbers.forEach((num) => num.addEventListener('click', function(e) {
        show(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e) {
        operate(e.target.textContent)
        previousScreen.textContent = previousValue + ' ' + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener('click', function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = '0';
        currentScreen.textContent = '0';
    })

    equal.addEventListener('click', function(e) {
        if (currentValue != '' && previousValue != '') {
            calculate();
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue;
        }
    })
})

function show(num) {
    if (currentValue.length <= 18) {
        currentValue += num;
    }
}

function operate(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else if (operator === '/') {
        previousValue /= currentValue;     
    }

    previousValue = previousValue.toString();
    currentValue = previousValue.toString(); 
}