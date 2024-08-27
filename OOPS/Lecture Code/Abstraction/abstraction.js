class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car stopped");
  }
}

let myCar = new Car("Honda", "Civic");
myCar.start();
myCar.stop();
