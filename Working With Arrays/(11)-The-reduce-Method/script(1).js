'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements)
console.log(movements.length)
// Here first input of the call-back function is accumulator which is like a snowball that keeps accumulating the value that we ultimately want to return.
// reduce method got 2 input: first one is entire call-back function and second one is initial value of the accumulator. Initial value that we specify here is the value of the accumulator in the first loop iteration.
// With reduce
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`)
  return acc + cur
}, 50)
console.log(balance)
console.log(typeof balance)

// With reduce + arrow
const balance3 = movements.reduce((acc, cur) => acc + cur, 50)
console.log(balance3)
console.log(typeof balance3)

// With for-of
let balance2 = 0
for (const mov of movements) balance2 += mov
console.log(balance2)

//! With reduce method object is not have to be sum of the array.
// Maximum Value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc
  else return mov
}, movements.at(0))
console.log(max)
