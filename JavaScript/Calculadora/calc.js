let firtsnum = '';
let secondnum = '';
let operator = '';
let reseter = false;

function inputNum(num) {
    if (reseter) {
        firtsnum = '';
        secondnum = '';
        operator = '';
        reseter = false;
        document.getElementById('visor').value = '';
    }
    if (operator === '') {
        firtsnum += num;
    } else {
        secondnum += num;
    }
    document.getElementById('visor').value += num;
}

function inputOp(op) {
    if (firtsnum === '') return;
    operator = op;
    document.getElementById('visor').value += ' ' + op + ' ';
}

function calculate() {
    let result = 0;
    const num1 = Number(firtsnum);
    const num2 = Number(secondnum);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    document.getElementById('visor').value = result;
    reseter = true;
}

function reset() {
    firtsnum = '';
    secondnum = '';
    operator = '';
    reseter = false;
    document.getElementById('visor').value = '';
}