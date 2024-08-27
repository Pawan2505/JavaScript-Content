let person = {
  name: "Rahul",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.greet();
