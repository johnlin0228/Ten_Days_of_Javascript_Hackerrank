/*jshint -W120 */

let operand1 = operator = operand2 = '';

function inputValue(val) {
    if (operator) {
        operand2 += val;
    } else {
        operand1 += val;
    }
    renderResult();
}

function assignOperator(val) {
    operator = val;
    renderResult();
}

function clearResult() {
    operand1 = operator = operand2 = '';
    renderResult();
}

function getResult() {
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    switch (operator) {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            if (operand2)
                operand1 /= operand2;
            break;
        default:
            break;
    }
    operand1 = parseInt(operand1).toString(2);
    operator = operand2 = '';
    renderResult();
}

function renderResult() {
    let result = document.getElementById("res");
    result.innerHTML = operand1 + operator + operand2;
}