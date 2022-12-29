'use strict'

const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}
const okan = new Person('Okan', 1993)
const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}
okan.calcAge() // 44
matilda.calcAge() // 20

//!---------------!//

console.log(okan.__proto__)
console.log(okan.__proto__.__proto__) // Object.prototype (top of the prototype chain)
console.log(okan.__proto__.__proto__.__proto__) // null // object.prototype is usually at the top of the scope chain.

console.log(Person.prototype.constructor) // constructor function itself
console.dir(Person.prototype.constructor) // to inspect constructor we used console.dir

const arr = [3, 6, 5, 5, 6, 9, 3] // [] === new Array
//! Whenever we create an array with using [] , it is indeed constructed by a array constructor behind the scenes.
console.log(arr.__proto__) // all the array methods that we already used and even more...
//! Each array does of course does not contain all of these methods but instead, each array will inherit these methods from its prototype.
console.log(arr.__proto__ === Array.prototype) // true
//! Above Array is constructor function.
console.log(arr.__proto__.__proto__) // all of the methods available for objects.

//?? We can extend the functionality of arrays even further. We can add any new method to prototype and all the arrays will then inherit it.

Array.prototype.unique = function () {
  return [...new Set(this)]
}
console.log(arr.unique()) // [3, 6, 5, 9]

//! Extending the prototype of a built-in object is generally not a good idea
//? Next version of the JS may add method with same name
//? When we work on a team of developers then this is gonna be the bad idea because if multiple developers implement the same method with different name then that is just going to create so many bugs

const h1 = document.querySelector('h1')
console.log(h1) // Huge prototype chain
console.dir(h1) // Huge prototype chain

console.dir((x) => x + 1) // functions are objects and objects have prototypes. Here we can see the method under the __proto__ section
