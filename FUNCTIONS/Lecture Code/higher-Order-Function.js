function applyOperation(a, b, operation) {
  return operation(a, b);
}

let result = applyOperation(5, 10, (x, y) => x + y);

console.log(result);
