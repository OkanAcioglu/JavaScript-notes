'use strict'

//! In JS sometimes we need a function that executes ones and then never again. This is the function that disappears right after its called once.
const runOnce = function () {
  console.log('This will never run again')
}
runOnce()
runOnce()
// For now nothing stop us to call this function again...

//! When we try execute function we took an error said Function statements require a function name this is because JS expects a function statement here.
// function() {
//   console.log('This will never run again');
// }

//! But we can trick JS into thinking that is just a expression by simply adding paranthesis and to call it we can add paranthesis at the end and we can immediately call it
;(function () {
  console.log('This will never run again')
})()

//! This is same for Arrow function
;(() => console.log('This will  Also never run again'))()

//! Side Note
{
  const isPrivate = 23
  var notPrivate = 46
}
//console.log(isPrivate) // Error
console.log(notPrivate) // 46

//!!! Using Immediately Invoke Function Espressions basically we create a private data because block scope creates its own scope in other words we encapsulate data. It is very important because we want protect our variables accidentaly overwritten by some other parts of the code. That is why IIFE created. But now in modern JS IIFE are not that used anymore because if all we want is to create a new scope for data privacy all we need to do is creating a block
