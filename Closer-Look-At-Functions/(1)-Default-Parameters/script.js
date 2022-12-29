'use strict'

//! It is sometimes good to set parameters as default.
const bookings = []

const createBooking = function (
  flightNum,
  numPassengers = 3,
  price = 199 * numPassengers
) {
  //! Old way of setting default parameters with using power of short circuiting...
  //numPassengers = numPassengers || 1 //! since undefined is falsy, if we did not assign anythink to the parameter then "1" is act as default parameter.
  //price = price || 199
  //! New ES6 way is setting parameter equal to desired constant value
  //! Cool about this is that default value can be expression. Even more usefull is that we can use the value of other parameters that were set before it...
  const booking = {
    flightNum,
    numPassengers,
    price,
  }
  console.log(booking)
  bookings.push(booking)
}

createBooking('LH123') // numPassengers and price set to undefined because we did not specify them...
createBooking('LH123', 2, 800) // Of course we can over-ride the default values.
createBooking('LH123', 2) // third default parameter assigned according to the second parameter.
createBooking('LH123', 5) // third default parameter assigned according to the second parameter.
//! It is important to note that we cannot skip arguments when we calling function...
//! If we wanna pass the any argument and use its default value, just set it as undefined. Because setting it undefined is exactly the same with not even setting it.
createBooking('LH123', undefined, 1000)
