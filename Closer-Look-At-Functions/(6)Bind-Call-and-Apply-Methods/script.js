'use strict'

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    )
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
  },
}

lufthansa.book(239, 'Okan')
lufthansa.book(635, 'John')
console.log(lufthansa)
// At this point everything is occured as expected i.e this keyword points the lufthansa object itself.

// Let say after some years, Lufthansa group created a new airline.
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

// We need the book method of the lufthansa object in the newly created eurowings. But copying the book method inside the lufthansa and paste it into the eurowings object is not a good practice.
const book = lufthansa.book // assign the method to the book variable

//book(23, 'Williams') // Now when we use this function error occured because now this book function here is regular function call. So this keyword in regular function is undefined.
//! To fix this problem we have to explicitly tell the JS what the this keyword here should be like. For example when we used it in the lufthansa this keyword will point to the lufthansa and when we used in the eurowings this keyword will point to the eurowings.

// Call Method
book.call(eurowings, 23, 'Williams')
console.log(eurowings)
book.call(lufthansa, 239, 'Sarah')
console.log(lufthansa)

//! Recall that functions are just object and objects have methods so the functions. call methods is one of them.
//! In the call method the firts argument is exactly what we want the this keyword to point to. and second and other ones exactly the arguments that goes to the function

// Apply Method
//! apply meethos do the exatly the same think as call method do.
//! Only difference is it took function arguments in the array format.
const flightData = [583, 'Martha']
book.apply(eurowings, flightData)
book.apply(lufthansa, flightData)

//! Nowadays apply method will not usually used anymore because of the new features that coming with ES6 and combination of call method will be more easy like below
book.call(lufthansa, ...flightData)
book.call(eurowings, ...flightData)

// Bind Method
//! Like call method bind also allows us the manually set this keyword for any function call
//! Difference between call and bind method is that bind do not immediately call the function instead it returns a new function where this keyword is bound.z

const bookEW = book.bind(eurowings) // Now bookEW is a function
const bookLH = book.bind(lufthansa)
bookEW(23, 'Steven')
bookLH(23, 'Paul')

//! We can create a function for specific flight for this case using bind method.
const bookEW23 = book.bind(eurowings, 23) // first argument to be setted
const bookLH23 = book.bind(lufthansa, 23) // first argument to be setted
//! Specifying parts of the argument beforehand, is actually a common pattern callaed PARTIAL APPLICATION
bookEW23('Okan')
bookEW23('Ahmet')
bookLH23('Okan')
bookLH23('Ahmet')

// Use of bind methods with Event Listeners
lufthansa.planes = 300
lufthansa.buyPlane = function () {
  console.log(this)
  this.planes++
  console.log(this.planes)
}
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane) // Now it is not working why because here this keyword points to the element on which handler is attached to.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)) // we used bind because we do not want to call immediately. We want to call it when it is clicked.

// Partical Application using bind method
//! Below case is the partical application using bind method without condisering this keyword.
//! For this in the bind method first argument set to null to pass this keyword. It can be anythink but null is the general use.
//! Keep in mind that order of the parameters is important.
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(200))

//! We can say that above situation can be done with using default parameters but this here is creating a brand new function based on a more general function.
