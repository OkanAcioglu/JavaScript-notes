'use strict'

const Person = function (firstName, birthYear) {
  // Instance Properties...
  this.firstName = firstName
  this.birthYear = birthYear
  // Never do below.
  //this.calcAge = function () {
  // console.log(2037 - this.birthYear)
  //}
}
const okan = new Person('Okan', 1993)

console.log(okan)

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda)
console.log(jack)

console.log(okan instanceof Person) // true

//! PROTOTYPES
// * Each and every function in JS automatically has a property called prototype and that includes constructor functions.
// ! Every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
// * Person.prototype --> all the objects that are created through Person constructor function will inherit (get access) to all the methods and properties that are defined on prototype property.
console.log(Person.prototype)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

okan.calcAge() // 44 // we used the calcAge Method although it is not on the "okan" object
matilda.calcAge() // 20

// * Now only one copy of the calcAge function exists and we can use this function on every object that created from the prototype.
// * Any object always has access to the methods and properties from its prototype

console.log(okan.__proto__) // {calcAge: ƒ, constructor: ƒ} // This is prototype of okan. It is not a prototype property but it is simply prototype.
console.log(Person.prototype)
console.log(okan.__proto__ === Person.prototype) // true // prototype of the okan object is essentially the prototype property of the constructor function
//! Person.prototype is actually not prototype of Person but instead it is what is gonna be used as the prototype of all the objects that are created with the Person constructor function.
console.log(Person.prototype.isPrototypeOf(okan)) // true
console.log(Person.prototype.isPrototypeOf(matilda)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false
//! This confusion coming from bad naming of this property. Fact that it is called prototype kind of implies that is the prototype of person but it is actually not.

//? We can also set properties on the prototype not just methods.
Person.prototype.species = 'Homo Sapiens'
console.log(okan) // Not directly in the object but in the prototype
console.log(okan.species) // Homo Sapiens
//! This property is not directly in the object. So it is not its own property. Own properties are only the ones that are declared directly on the object itself.
console.log(okan.hasOwnProperty('firstName')) // true
console.log(okan.hasOwnProperty('species')) // false
