// Imporing Module
console.log('Importing Module')

// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
//   amount,
// } from './shoppingCart.js'

// addToCart('bread', 5)

// console.log(price, totalQuantity, amount)

console.log('Importing Module')
// console.log(shippingCost) // We cannot do this because of privacy of module variable

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice)

import add from './shoppingCart.js'
add('pizza', 2)

import { cart } from './shoppingCart.js'
add('pizza', 5)
add('bread', 3)
add('apples', 6)
console.log(cart)

//! After release of ES2022 version now we can use await outside of the async function at least in module (Top Level Await)

//! Below await works outside of the function
//! But note that await outside of the async function is blocking the entire execution of the module which we are never seen before

// console.log('Start fetching')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json()
// console.log(data)
// console.log('Something')

//! Before this we have to do
//...async function() {
// await...
// . }

//? Lets give more real world example...

//! Below we want to return the last element of an array. For this we used new ES2022 method which is at() method...

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
  return { title: data.at(-1).title, text: data.at(-1).body }
}
const lastPost = getLastPost()
console.log(lastPost) // async function always return promise not the actual data itself

//! To get the data here we will use regular promise
lastPost.then((last) => console.log(last))
// But doing this was not clean
// Instead of this we can use top level await

const lastPost2 = await getLastPost()
console.log(lastPost2)

//?? One last application of top level await is the fact that if one module imports a module which has a top-level await then importing module will wait for the imported module to finish the blocking code
//! %%%%%%)
//?? Only after the fetch is completed the code in the importing module executed...
