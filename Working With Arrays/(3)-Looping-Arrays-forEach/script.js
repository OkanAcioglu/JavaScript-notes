'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
//*  for-of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`)
  } else {
    console.log(`You withdrawal ${Math.abs(movement)}`)
  }
}

//*  forEach() method
// Below, forEach technically higher-order function
// It needs callback function
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`)
  } else {
    console.log(`You withdrawal ${Math.abs(movement)}`)
  }
})
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// ...

//! RECALL
for (const movement of movements.entries()) {
  console.log(movement)
}
// Output:
// [0, 200]
// [1, 450]
// [2, -400]
// [3, 3000]
// [4, -650]
// [5, -130]
// [6, 70]
// [7, 1300]

//! When we need counter variable (current index)...

// for-of loop
for (const [index, value] of movements.entries()) {
  if (value > 0) {
    console.log(`Movement ${index + 1}: You deposited ${value}`)
  } else {
    console.log(`Movement ${index + 1}: You withdrawal ${value}`)
  }
}

// forEach()
movements.forEach(function (movement, i, arr) {
  console.log(movement, i, arr)
})
//! In fact forEach passes in the current element, index and entire array that we looping in each iteration.
//! Keep in mind that in forEach method order of the parameters of the callback function always value,index and array itself...

movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${i + 1}: You withdrawal ${movement}`)
  }
})

//!!! There is one fundamental difference between for-of loop and forEach method is that we cannot break forEach method. Continue and break statement do not work in a forEach loop.
