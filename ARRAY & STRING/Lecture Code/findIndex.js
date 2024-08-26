let grades = [70, 85, 90, 100];
let index = grades.findIndex(function (grade) {
  return grade > 90;
});
console.log(index);
