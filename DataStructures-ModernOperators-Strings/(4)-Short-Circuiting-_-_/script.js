'use strict'
//? OR (\\) Operator
// Use ANY data type
// Return ANY data type
// Used short-circuating
// ! OR try to find the first truthy... If it find immediately return it otherwise it is return at the end whether it is truthy or falsy...
console.log(3 || 'Jonas') // 3
console.log('' || 'Jonas') // 'Jonas'
console.log(true || 0) // true
console.log(undefined || null) // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null) // Hello

// Suppose we have an object we want to learn is there a property as numGuests... For this we can use short circuating. If it is exist, return it otherwise return a constant value 10...

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guest1) // primitive
// const guest2 = restaurant.numGuests || 10
// console.log(guest2) // with short circuiting

//! Note that above two situation will not give the true result if the numGuests = 0 but there is a solution for that is Nullish Coalescing Operator

//? AND (&&) Operator
// Use ANY data type
// Return ANY data type
// Used short-circuating
// ! AND try to find the first falsey... If it find immediately return it otherwise it is return at the end whether it is truthy or falsy...
console.log(0 && 'Jonas') // 0
console.log(7 && 'Jonas') // 'Jonas'
console.log('Hello' && 23 && null && 'Okan') // null
console.log(true && 0) // 0
console.log(88 && null) // null

// Suppose we want to learn that specific property exists in the object or not. Below in both cases if method exist method will do what we want if not not doing anything

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach')
// } // Primitive

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach') // with short circuating

//? NULLISH COALESCING (??) Operator
// * Nullish Coalescing (??) operator take only the null and undefinied as a falsey value. (0 and '' are truthy for this operator)

// Now below situatin totally correct with nullish coalescing operator.
// restaurant.numGuests = 0
// const guest2 = restaurant.numGuests || 10
// console.log(guest2) // with short circuiting
// const guest2 = restaurant.numGuests ?? 0
// console.log(guest2) // with short circuiting
