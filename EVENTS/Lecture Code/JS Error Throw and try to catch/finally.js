function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result = divide(10, 2); // Assuming the divide function from above
  console.log(result);
} catch (error) {
  console.log("Error: " + error.message);
} finally {
  console.log("This runs no matter what.");
}
