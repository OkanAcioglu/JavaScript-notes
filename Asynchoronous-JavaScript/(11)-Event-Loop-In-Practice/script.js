'use strict'

console.log('Test Start')
// Timeout
setTimeout(() => console.log('0 sec timer'), 0)
//! After 0 seconds this callback will be put in the callback queue
// Promise
Promise.resolve('Resolved Promise 1').then((result) => console.log(result))
Promise.resolve('Resolved Promise 2').then((result) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(result)
})
console.log('Test End') // Another string

//! Promise.resolve allows us to build a promise that is immediately resolved. So one that immediately has a success value.
//! Fullfilled (success value) is gonna be the one we passed in.
//! Then we can handle that resolved promise and so that we then log it to console.

//? What will be in the console when we run the code?
//! It is obvious that first and last  synchronous console.log functions comes first because top level code (outside of any callback function) will run first
//! About timer and promise they will finish exatly same time (both after 0 seconds) because timer set to 0 seconds and promise is setted to immediately resolved.
//! Timer finished first and its callback function putted into the callback queue first and callback of the resolved promise will be putter into the microtask queue and we know that microtask queue has priority to the callback queue. At the and we will have 1 callback in callback queue and 1 callback in microtask queue and one from the microtast queue will be executed first.

//? When we add second promise and inside this promise we add an heavy task??
//! In second promise we add and heavy microtask that is for loop. And when we look at the result we see that timer do not executed at 0 seconds but it will wait the microtask to be handle.
