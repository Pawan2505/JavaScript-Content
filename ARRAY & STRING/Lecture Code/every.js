let numbers = [10, 20, 30];
let allEven = numbers.every(function (num) {
  return num % 2 === 0;
});
console.log(allEven);