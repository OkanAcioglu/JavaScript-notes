'use strict'

//! Good example to understand a static method is built in Array.from method
//? We used Array.from method to convert any array like structure to a real array
console.log(Array.from(document.querySelectorAll('h1'))) // [h1]
//! Point is that from method is really method that attached to the Array constructor
//! We could not use the method on array
// [1,2,3].from() -> will not work
//! Because from method really attached to the entire constructor not to the prototype property of the constructor. Therefore all the arrays do not inherit this method

const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}
const okan = new Person('Okan', 1993)
console.log(okan)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}
// To create a static method simply...
Person.hey = function () {
  console.log('Hey there...')
  console.log(this) // entire constructor function
}
Person.hey()
//okan.hey() // Now we cannot say that because it is not in the prototype of jonas object

//! To create a static method on ES6 -> simply add static...
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
  // Instance Method
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  greet2() {
    console.log(`Hello ${this.firstName}`)
  }
  // Static Method
  static hey() {
    console.log('Hey there...')
    console.log(this) // entire class
  }
}

PersonCl.hey()
