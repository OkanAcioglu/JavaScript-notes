'use strict'

//* Remember that methods are simply functions that we can call on objects.
//* Array methods simply functions attached to all arrays.
//* For now keep in mind that arrays are objects and they get access to special built in methods.

let arr = ['a', 'b', 'c', 'd', 'e']

//? slice() method
// Very similar to the method used for string
// extract some part of the array without changing original array.
// Keep in mind that end parameter not included in the output.
console.log(arr.slice(2)) // ['c', 'd', 'e']

console.log(arr.slice(2, 4)) // ['c', 'd']

// Negative starts from last element and last element is "-1"
console.log(arr.slice(-2)) // ['d', 'e']
console.log(arr.slice(-1)) // ['e']

// We can use combination of positive and negative
console.log(arr.slice(1, -2)) // ['b', 'c']

// without introduce anythink into the slice we can create shallow copy of the array.
console.log(arr.slice()) // ['a', 'b', 'c', 'd', 'e']

// Shallow copy with using spread operator
console.log([...arr]) // ['a', 'b', 'c', 'd', 'e']

//! Which one will be used for shallow copy is entirely up to us.

//? splice() method
// Works nearly as slice() but fundamental difference is splice() method MUTUATE original array.
// first input works as same as slice() method
// Here second input called "deletecount" and indicate that how many element starting from first input will be extracted.

//console.log(arr.splice(2)) // ['c', 'd', 'e']
//console.log(arr) // ['a', 'b'] // extracted elements gone from original array.

//console.log(arr.splice(2, 2)) // ['c', 'd']
//console.log(arr) // ['a', 'b', 'e']

//! Generally splice() method output do not care us. Generally used for mutuate and use the original array.

//? reverse() method
// Reverse the order of the elements.
// MUTUATE the original array.
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse()) // ['f', 'g', 'h', 'i', 'j']
console.log(arr2) // ['f', 'g', 'h', 'i', 'j']

//? concat() method
const letters = arr.concat(arr2)
console.log(letters) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(arr) // ['a', 'b', 'c', 'd', 'e']
console.log(arr2) // ['f', 'g', 'h', 'i', 'j']

// Using spread operator
console.log([...arr, ...arr2]) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//! Which one will be used for shallow copy is entirely up to us.

//? join() method
// join all the elements in a string.
// Do not MUTUATE original array
console.log(letters.join('-')) // a-b-c-d-e-f-g-h-i-j
console.log(letters)
