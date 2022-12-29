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

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log(data)
  return { title: data.at(-1).title, text: data.at(-1).body }
}
const lastPost = getLastPost()
console.log(lastPost) // async function always return promise not the actual data itself

//lastPost.then((last) => console.log(last))

const lastPost2 = await getLastPost()
console.log(lastPost2)
//! Just like regular modules, main goal of the module pattern is to encapsulate functionality to have private data and to expose a public API.
//! Best way of doing that is by simply using function because functions gives us private data by default and allow us to return values which can become our public API
//! Usually IIFE used. This way we do not have call it separately and also ensure that it is only called one. Note that only purpose of the IIFE here is create a new scope and return data just ones
//! Inside the function we simply return object which contains the stuff that we want to make public here
//! If we do not store the function, when we execute it, it will disappear. So in order to take the data coming from return we should store this function into a variable.
//! Recall that all we doing here is still in the module
//! We can manipulate data inside the function by returning object outside of the function and how all of this works is simply closure.
//! addToCart function created inside the function. It's birthplace is inside the function and so this function never loses connection to its birthplace
//! Therefore addToCart function out of the function scope can still access cart variable inside the function reason why this works is not because the cart variable is also in the returning object

const ShoppingCart2 = (function () {
  const cart = []
  const shippingCost = 10
  const totalPrice = 237
  const totalQuantity = 23

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to the cart`)
  }
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} ordered from supplier `)
  }
  return { addToCart, cart, totalPrice, totalQuantity }
})()

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)
console.log(ShoppingCart2)
console.log(ShoppingCart2.shippingCost) // Still private...

//!!! Problem is if we wanted one module per file then we have to create different scripts and link all of them in the HTML and then that creates couples of problems like be carefullying with the order, we would have all the variables living in the global scope and finally we could not bundle them together
