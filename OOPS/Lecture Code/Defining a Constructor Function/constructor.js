function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var person1 = new Person("Pawan", "Maurya", 24);
var person2 = new Person("Manish", "Mishra", 24);

console.log(person1.firstName);
console.log(person2.lastName);
