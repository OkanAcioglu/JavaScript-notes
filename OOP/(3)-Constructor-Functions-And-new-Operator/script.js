'use strict'

// * we use constructor functions, to build an object using a function
// * constructor function is a completely normal function. The only difference between a regular function and function that we call constructor function is that we call a constructor function with the new operator.

//! In OOP there is this convention that constructor functions always start with a capital letter.

//? below function expression used but also function declaration will also works. But arrow function will actually not work simply it does not has its own this keyword.

const Person = function (firstName, birthYear) {
  //console.log(this) // Person {}  //! means in the end of this function the this keyword will basically be returned and so whatever we add to that empty object, will then be returned from the function. And that returned objects is gonna be the object that we are trying to built.
  //! Instance Properties...
  this.firstName = firstName
  this.birthYear = birthYear
  //! Never do below. Creating method into the constructor function means that each object that we create with using this constructor carry the method that we create here. This will cause bad performance. Instead use prototypes and prototype inheritance.
  //this.calcAge = function () {
  // console.log(2037 - this.birthYear)
  //}
}
const okan = new Person('Okan', 1993) // * here new is very special operator. Because what it does is to call this function here. But do more than that.

console.log(okan)

//! Behind the scenes there have been 4 steps:
//? 1. New empty object created
//? 2. function is called, this = {}
//? 3. {} linked to a prototype
//? 4. function automatically returns {}

// * We can use this constructor function to create as many objects as we want.
const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda)
console.log(jack)
//! This constructor function is now blueprint for a house and then each objects that we create through that function are like houses.

//! We can think constructor function as a simulation of classical OOP class and we can check whether it is instance of an simulation or not.
console.log(okan instanceof Person) // true
