'use strict'

const eurToUsd = 1.1

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// Using map method
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd
  //return 23 //[23, 23, 23, 23, 23, 23, 23, 23]
})
console.log(movements) // do not mutuate
console.log(movementsUSD) // returns an array

// Using map + arrow function
const movementsUsdArrow = movements.map((mov) => mov * eurToUsd)
console.log(movements)
console.log(movementsUsdArrow)

// Using for-of
let movementsUSD2 = []
for (const mov of movements) {
  movementsUSD2.push(mov * eurToUsd)
}
console.log(movementsUSD2)

//! Here it is important note that with map method it is more like a functional programming which one of the programming paradigm...

//? Like the forEach method, map method has an access to the exact same three element.
// map method with using arrow function + simplied + value and index called...
const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
)
console.log(movementDescriptions)

//! Keep in mind that in forEach method we printed each line individually to the console as we are looping over the array. So in each of the iterations, we performed some action that was then visible in the console and we can call this a "side effect". There is no side effect on map method only doing is give a new array.
//! Side effect is important for functional programming...
