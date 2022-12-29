'use strict'

// Below we will create a variable as flight and a object as okan then pass them into the function as an argument.
// Then into the function although doing it usually not a good practice, we will change the parameters of function
const flight = 'LH234'
const okan = {
  name: 'Okan',
  passport: 123445567,
}
const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH999'
  passenger.name = 'Mr.' + passenger.name

  if (passenger.passport === 123445567) {
    alert('Checked In')
  } else {
    alert('Wrong passport!')
  }
}

checkIn(flight, okan)
console.log(flight)
console.log(okan)
//! Now above situation we see that flight number did not changed although we changed it inside the function. But name property changed due to new assignment inside the function.
//! For object since both are the same object in the memory heap but for primitive type to a function really just the same as creating a copy like outside of the function.
// Is the same as doing...
const flightNum = flight
const passenger = okan

//! Fact that object behaves like this can have unforesenable consequence in large code bases especially for working with multiple developers.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000)
}
newPassport(okan)
checkIn(flight, okan)
//! What is going on above that there is two function manipulating same object. So that is creating a problem.

//??? In programming there are two terms that are used all the time when dealing with functions. These are: passing by a value and passing by a reference and many experienced programmers that are new to JS have some confusion between these terms and how it works in the JS. So JS does not have passing by reference, only passing by value. Eventhough its look like its passing by reference. It is a little bit confusing because above codes we do in fact pass in a reference. So the memory adress of the object. However that reference itself is still a value. It is simply a value that contains a memory adress. so basically we pass a reference to the function, but we do not pass by reference.
