function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

var person1 = new Person("Pawan", "Maurya", 24);
console.log(person1.getFullName());