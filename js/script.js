let operand;
let total = 0;
let previousValue = 0;
let newValue = 0;
let paisi = false;

const output = document.getElementById('input-field');
function display(input) {
    if (input >= '0' && input <= '9') {
        output.value += input;
        previousValue = newValue;
    }
    else {
        newValue = parseFloat(output.value);
        output.value = '';
        operand = input;
    }
}

function calculate() {
    newValue = parseFloat(output.value);
    switch (operand) {
        case '+':
            output.value = previousValue + newValue;
            break;
        case '-':
            output.value = previousValue - newValue;
            break;
        case 'x':
            output.value = newValue * previousValue;
            break;
        default:
            output.value = previousValue / newValue;
    }
}

document.getElementById('clear').addEventListener('click', function () {
    output.value = '';
});