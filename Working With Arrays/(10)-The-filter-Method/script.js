'use strict'

//! filter method used to filter for elements that are satisfied certain contion
//! How do we specify that certain condition? With using callback function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// filter method
const deposits = movements.filter(function (mov) {
  return mov > 0 // trick here is that returning a boolean value
})
console.log(movements)
console.log(deposits)

const withdrawal = movements.filter((mov) => mov < 0)
console.log(withdrawal)

// for-of loop
let deposits2 = []
for (const mov of movements) {
  if (mov > 0) {
    deposits2.push(mov)
  }
}
console.log(deposits2)
