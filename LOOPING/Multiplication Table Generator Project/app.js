// Multiplication Table Generator
function generateTable() {
    const num = parseInt(document.getElementById('multiplier').value);
    let result = '';

    if (isNaN(num)) {
        result = 'Please enter a valid number.';
    } else {
        for (let i = 1; i <= 10; i++) {
            result += `${num} x ${i} = ${num * i}<br>`;
        }
    }

    document.getElementById('tableResult').innerHTML = result;
}

// Number Counter
function countNumbers() {
    const countTo = parseInt(document.getElementById('countTo').value);
    let result = '';

    if (isNaN(countTo) || countTo < 1) {
        result = 'Please enter a valid positive number.';
    } else {
        let i = 1;
        while (i <= countTo) {
            result += `${i} `;
            i++;
        }
    }

    document.getElementById('countResult').innerHTML = result.trim();
}

// Array Sum Calculator
function sumArray() {
    const arrayInput = document.getElementById('arrayInput').value;
    const array = arrayInput.split(',').map(Number);
    let sum = 0;

    if (array.some(isNaN)) {
        document.getElementById('sumResult').innerHTML = 'Please enter valid numbers separated by commas.';
        return;
    }

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    document.getElementById('sumResult').innerHTML = `Sum: ${sum}`;
}
