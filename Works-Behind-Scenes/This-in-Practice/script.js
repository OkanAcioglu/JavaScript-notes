'use strict'

// This in the global scope
console.log(this) // Window Object

// Inside Regular Function Call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear) //46
  console.log(this) //undefined... Because we are in strict mode...
}
calcAge(1991)
//! Without strict mode (slopy mode) it is also global object...

// Inside Arrow Function Call
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear) // 46
  console.log(this) // Window Object
}
calcAgeArrow(1991)
//! Arrow function does get his this keyword. Instead the arrow function simply uses lexial this keyword, which means that it uses the this keyword of its parent function(parent scope)

// Inside a Method
const okan = {
  year: 1993,
  calcAge: function () {
    console.log(this) // okan object itself.
    console.log(2037 - this.year) // 44
  },
}
okan.calcAge()

//
//! We always said This keyword will point to the object that is calling the method. This is not means that at the object in which we wrote the method. Above object we wrote the method inside the "okan" object. So we think that that is why this keyword point to the "okan" but actually reason that the this keyword point to "okan" is because "okan" was the object calling debt method.
const matilda = {
  year: 2017,
}
matilda.calcAge = okan.calcAge // Here we simply copy the calcAge method from "okan" object to "matilda" object. This is called "method borrowing"
matilda.calcAge() // 20
// Above we calling the method on matilda. So this keyword point to the matilda.
//! So although method is written inside the "okan" object, this keyword still point to the matilda.

const f = okan.calcAge
console.log(f)
f() // undefined also get an error that said cannot read properties of undefined.
// This is because f function is now a regular function. There is no owner of the function.
