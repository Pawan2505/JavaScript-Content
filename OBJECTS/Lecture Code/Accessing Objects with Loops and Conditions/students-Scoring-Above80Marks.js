let students = [
  { name: "Amit", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Ravi", marks: 78 },
];

students.forEach(function (student) {
  if (student.marks > 80) {
    console.log(student.name + " scored more than 80 marks.");
  }
});
