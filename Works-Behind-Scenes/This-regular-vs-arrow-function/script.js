'use strict'

const okan = {
  firstName: 'Okan',
  year: 1993,
  calcAge: function () {
    console.log(this).console.log(2037 - this.year)
  },
  greet: () => console.log(`Hey ${this.firstName}`),
}
okan.greet() // Hey undefined ... Because arrow function does not get his own this keyword. It will use the this keyword from it surroundings. Parent scope of the greet method is global scope.
//! Note that curly braced used for creating a object is not a code block. It is simply object literals. So it has not its own execution context. "okan" object is in the global scope so the arrow function.
console.log(this)
console.log(this.firstName)

// Now imagine we have variable define with "var"
var firstName = 'Matilda'
const okan2 = {
  firstName: 'Okan',
  year: 1993,
  calcAge: function () {
    console.log(this).console.log(2037 - this.year)
  },
  greet: () => console.log(`Hey ${this.firstName}`),
}
okan2.greet() //Hey Matilda
//! Now it is said Hey Matilda... Why?
//? Because inside of the function this keyword point to the global object which is window. And as we declare a variable as firstName= "Matilda" it is written in the global object so this keyword inside the greet point to that window so the firstName variable taken as Matilda...

//!!! NEVER USE ARROW FUNCTION AS A METHOD...

// Function Inside the Method...
const okan3 = {
  firstName: 'Okan',
  year: 1993,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)

    const isMillenial = function () {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)
    }
    isMillenial()
  },
  greet: () => console.log(`Hey ${this.firstName}`),
}

//okan3.calcAge() // Error ...
//! Above isMillenial is just a regular function although it is defined in the method. So this keyword inside the regular function is undefined.

//! There is two way to avoid this:
//? First one is define a "self" variable that takes the value as a "this" then use "self" variable inside the function.
//? This pre ES6 solution
const okan4 = {
  firstName: 'Okan',
  year: 1993,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
    const self = this // self or that
    const isMillenial = function () {
      console.log(self)
      console.log(self.year >= 1981 && self.year <= 1996)
    }
    isMillenial()
  },
  greet: () => console.log(`Hey ${this.firstName}`),
}
okan4.calcAge()
//? Second one is using arrow function
//? This will work because arrow function simply use the parent scope this keyword.
const okan5 = {
  firstName: 'Okan',
  year: 1993,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
    const isMillenial = () => {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)
    }
    isMillenial()
  },
  greet: () => console.log(`Hey ${this.firstName}`),
}
okan5.calcAge()

//! Arguments keyword...
// * Functions also get access to arguments keyword
// * Just like the this keyword, the arguments keyword is only available in the regular functions.
// * Function expressions also have arguments keyword.
// * Arrow functions did not take this keyword.

const addExpr1 = function (a, b) {
  console.log(arguments) // array that contains two arguments that we passed in
  return a + b
}
addExpr1(1, 2)
addExpr1(1, 2, 3, 4) // actually we can add more arguments
// They will not have a name, so we did not name them but they exist.
// Since they appear we can use them in the function

var addArrow1 = (a, b) => {
  console.log(arguments) // Error ... Arguments is not defined.
  a + b
}
addArrow1(2, 5, 8)
