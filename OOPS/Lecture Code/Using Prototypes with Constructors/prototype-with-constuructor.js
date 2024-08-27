function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getDetails = function() {
    return this.firstName + " " + this.lastName + ", Age: " + this.age;
};

var person1 = new Person("Pawan", "Maurya", 24);
var person2 = new Person("Vivek", "Mishra", 25);

console.log(person1.getDetails()); 
console.log(person2.getDetails()); 
