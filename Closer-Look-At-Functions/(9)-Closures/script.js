'use strict'

//! Closure not a feature we explicitly used instead it happens automatically in certain situations
const secureBooking = function () {
  let passengerCount = 0
  return function () {
    passengerCount++
    console.log(`${passengerCount} passenger`)
  }
}

const booker = secureBooking()

booker() // 1 passenger
booker() // 2 passenger
booker() // 3 passenger

//! How booker function update this passengerCount variable that is defined in a secureBooking function that actually has already finished execution?? --> Closure
//! Closure makes a function remember all the variables that existed at the functions birthplace. Above case secureBooking function is being birthplace of the booker function.
//! Closure cannot be explained with the scope chain alone
//! Now execution context of the secureBooking no longer in the call-stack because this function finished execution long ago. After when we run the booker function (and note that booker function is located at the global scope) new execution context is created and putted top of the call-stack and variable environment is empty since we dont declare any variable in it. Since booker is in the global context, it is simply child scope of the global scope so how will the booker access to the passengerCount it is no where to be found in the scope chain. And here secret of the Closure comes to play... Any function always has access to the variable environment of the execution context in which function was created. This connection called Closure.
//! Eventhough the execution context has actually been destroyed, variable environment somehow keeps living somewhere in the engine
//?? booker function attempts to increase the passengerCount variable, however this variable does not in the current scope and so JS will immediately look the closure and see if it can find the variable there. IT DOES THIS EVEN BEFORE LOOKING THE SCOPE CHAIN. For example if there is a global passengerCount variable set to 10, it would still use the one in the closure. So the closure has priority over the scope chain

// Some CLOSURE Explanations
//* Closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone
// * Closure gives a function access to all the variable of its parent function, even after that parent function has returned. The functions keeps a reference to its outer scope, which preserve the scope chain throughout the time
//* Closure makes sure that a does not loose connection to variable that existed at the functions birth place

console.dir(booker) //! We get function itself. Inside the function there is a scope internal property. This internal property scope here is basically variable environment of the function. We can see the closure coming from the secureBooking...

//! Side Note: When we look at the booker function with console.dir, Scopes property is in a double bracket means that it is an internal property which we cannot access from the code
