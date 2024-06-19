// script.js

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === '^2') {
        display.value += '**2';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
