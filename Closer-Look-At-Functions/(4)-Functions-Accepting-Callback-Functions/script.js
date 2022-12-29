'use strict'

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ')
}
//! High Order Function
// Below is an high order function because it simply took a function as an parameter.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`)
  console.log(`Transformed string: ${fn(str)}`) // Where we are calling the function
  console.log(`Transformed by: ${fn.name}`) // functions besides methods also have properties. Here it just shows the name of function
}
transformer('JavaScript is the best!', upperFirstWord) // Notice that we are only passing in the function value itself. We are not calling the function here.
transformer('JavaScript is the best!', oneWord)
//! Above functions in the transformer function's input are callback functions. Because we do not call them ourselves but instead we call JS to basically call them later.

// Example
const high5 = function () {
  console.log('Give me 5')
}
document.body.addEventListener('click', high5) // Here addEventListener is high order function and high5 is callback function.

// Example
const x = ['Jonas', 'Martha', 'Adam'].forEach(high5)

//! JS uses callback functions all the time!!! Why??
//? Firstly it is easy ti split up our code into more reusable and interconnected parts.
//? Second and more important fact that callback functions allow us to create abstraction.

// * Abstraction means is that we hide the detail of some code implementation because we do not really care about all that detail. This allows us to think about problems at a higher more abstract level.
