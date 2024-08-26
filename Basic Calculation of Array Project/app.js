// Function to calculate the sum of the array
function calculateSum(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

// Function to find the maximum value in the array
function findMax(arr) {
    let max = Math.max(...arr);
    return max;
}

// Function to find the minimum value in the array
function findMin(arr) {
    let min = Math.min(...arr);
    return min;
}

// Function to calculate the average of the array
function calculateAverage(arr) {
    let sum = calculateSum(arr);
    let average = sum / arr.length;
    return average;
}

// Function to perform the calculations when the user clicks the "Calculate" button
function calculateArray() {
    // Get the input value from the user
    let userInput = document.getElementById('userArray').value;
    
    // Convert the input string into an array of numbers
    let numbers = userInput.split(',').map(Number);

    // Display the results
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Array: ${numbers.join(', ')}</p>
        <p>Sum: ${calculateSum(numbers)}</p>
        <p>Maximum Value: ${findMax(numbers)}</p>
        <p>Minimum Value: ${findMin(numbers)}</p>
        <p>Average: ${calculateAverage(numbers).toFixed(2)}</p>
    `;
}
