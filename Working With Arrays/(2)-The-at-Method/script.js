'use strict'

//! at() method introduce with ES2022
const arr = [23, 11, 64]
console.log(arr[0]) // 23 // element at position "0"
console.log(arr.at(0)) // 23 // element at position "0"
// exact same think as bracket method but using method

// Suppose we wanted to get last element of an array and suppose we do not know length of array
// Way 1
console.log(arr[arr.length - 1]) // 64
// Way 2
console.log(arr.slice(-1)[0]) // 64
// at()
console.log(arr.at(-1)) // 64

//! For method chaining at method is very usefull.
