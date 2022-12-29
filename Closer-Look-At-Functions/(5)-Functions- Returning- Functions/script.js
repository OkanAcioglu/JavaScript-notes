'use strict'

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}
const greeterHey = greet('Hey')
//! Here greet('Hey') function exactly return a function inside itself.
//! And greeterHey is now a function. So we can call this as we can call the other functions...
greeterHey('Okan')
greeterHey('Steve')
// Another Way Of Calling Function
greet('Hello')('Okan') // Since greet("Hello") is a function way after we define argumet of that function and it works.
//! Here greeting is still coming from the greet function. It is because of smth. called CLOSURE.

// Same Function with Arrow Version
const greet2 = (greeting) => {
  return function (name) {
    console.log(`${greeting} ${name}`)
  }
}
const greetHey2 = greet2('Hey')
greetHey2('Okan')
greet2('Hello')('Maho')

// More Simplified Arrow Function
const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`)
greet3('Hello')('Edo')

//??? Where do we need this functions returning another function?
//* It is extremely useful when using programming paradigm called functional programming.
