function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getInfo = function () {
  return this.year + " " + this.make + " " + this.model;
};

var car = new Vehicle("Toyota", "Corolla", 2020);
console.log(car.getInfo());
