'use strict'

//! We do not need to return a function from another function in order to create a closure

//? Example 1
let f

const g = function () {
  const a = 23
  f = function () {
    console.log(a * 2)
  }
}

const h = function () {
  const b = 777
  f = function () {
    console.log(b * 2)
  }
}

g()
//! When we execute the code a=23 and f variable declared outside of the function equal to the function created inside the g function.
f() // 46
//! f variable created outside of the function (i.e. global scope) then we assign it a function and it still access to the variable environment of g

// Re-assign of f
//! Now we create another function called h and inside of that function we assign new function to the f
h()
f() // 1554
//! f function has an access to variable environment of h
console.dir(f) // in scope there is no longer value of a

//? Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`)
    console.log(`There are 3 groups, each with ${perGroup} passangers`)
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`)
}
const perGroup = 1000
boardPassengers(180, 3)
//! Callback function in the setTimeOut was executed completely independently from the board passangers function. but still the callback function was able to use variables that were in the variable environment in which it was created
//! Although there is a global variable perGroup closure has a priority and variable decleared in the function scope was used
