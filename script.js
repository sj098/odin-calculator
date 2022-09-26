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