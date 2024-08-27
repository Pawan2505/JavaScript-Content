
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let rahul = new Person("Rahul", 30);
rahul.greet(); 
