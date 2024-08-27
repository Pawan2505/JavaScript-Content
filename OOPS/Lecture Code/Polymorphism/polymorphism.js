class Shape {
  area() {
    console.log("Calculating area...");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    console.log("Area of Circle: " + Math.PI * this.radius * this.radius);
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    console.log("Area of Rectangle: " + this.length * this.width);
  }
}

let shape1 = new Circle(5);
let shape2 = new Rectangle(4, 6);

shape1.area();
shape2.area();
