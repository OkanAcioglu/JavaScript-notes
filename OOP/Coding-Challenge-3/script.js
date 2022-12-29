'use strict'

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)
console.log(bmw)
console.log(mercedes)

console.log(mercedes.accelerate())
console.log(mercedes.accelerate())
console.log(mercedes.brake())
console.log(mercedes.accelerate())

console.log(bmw.accelerate())
console.log(bmw.brake())
console.log(bmw.accelerate())
console.log(bmw.accelerate())
