'use strict'

//! Variables
console.log(me) // undefined ... Hoisted to the value undefined...
//console.log(job) // Access before initialization Error... in TDZ
//console.log(year) // Access before initialization Error... in TDZ

var me = 'Okan'
let job = 'Student'
const year = 1991

//! Functions

console.log(addDecl(2, 3)) // 5
//console.log(addExpr(2, 3)) // Access before initialization Error... in TDZ... because it is simply const variable.
//console.log(addArrow(2, 3)) // Access before initialization Error... in TDZ... because it is simply let variable.
function addDecl(a, b) {
  return a + b
}
const addExpr = function (a, b) {
  return a + b
}
let addArrow = (a, b) => a + b

//console.log(multipExpr(2, 3)) // Not a function Error... Because of before calling function and because of calling function before although it is hoisted, it is undefined and undefined is not a function
//console.log(multipArrow(2, 3)) // Not a function Error... Because of before calling function and because of calling function before although it is hoisted, it is undefined and undefined is not a function
var multipExpr = function (a, b) {
  return a * b
}
var multipArrow = (a, b) => a * b

// Example
console.log(numProduct)
if (!numProduct) deleteShoppingCart() // Because of hoisting cart will be deleted although numProduct equal to 0
//! This is another example of why we do not use the var variable.

var numProduct = 10

function deleteShoppingCart() {
  console.log('All Products Deleted!')
}

// Window Object
//! Window is the global object of the JS in the browser.
var x = 1
let y = 2
const z = 3
//! When a variable declared with using var creates a property as x and of its value as 1 in the window object...

console.log(x === window.x) // true

//!!! To Sum Up:
//? Do not use var as a variable decleration...
//? Declare variable top of the code...
//? Try to declare functions first...
