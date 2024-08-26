let numbers = [1, 3, 5, 7];
let hasEven = numbers.some(function(num) {
  return num % 2 === 0;
});
console.log(hasEven);
