//! Lets start with simpler case which is import a module but without importing any value

//? As we create a new module, we have to create a new file
//? Here we create a shoopingCart module and as a convention camel case is used when module is named
//? We use import then a string with the location of the module
//? Do not forget to set the type attribute of the script tag in the HTML to module
//? First log on the console is coming from the shoppingCart
//? Note that code that coming from the shoppingCart hoisted and executed before the other codes in the file
//? Variables declared inside a module, scope into the module means they are private
//? If we want to use variable inside the shoppingCart we have to use export.
//? We can change the name of the imported value from the module simply using "as"
//? We can also change the name of the imported value directly into the module with using again ""
//? Exports always need to happen in top level code(***)
//? There is 2 types of export in ES modules
//! Named Exports
//* Simplest way
//* Just put export in front of anythink that we want to export in the module and add this to the import in the script with using from and curly braces
//* We can also export multiple things from a module using Named Exports. This is main use case of Named Exports basically when we want to export multiple things
//* We can import all the exports of a module at the same time with using "*" and giving it a name. (Convention is that all words in the name should start with capital letters as in the class) This will create an object that containing everythink that is exported from the module. When we wanted to use it we have to take it from the object. We can think of this module now basically exporting a public API just like a class
//! Default Exports
//* Use case of the default exports is when we only want to export one thing per module
//* To use it we write export then write default then simply export a value without giving a name (?? ?? ??)
//* When we import it we can give any name that we want

//!!! We could even mix of them in the same import statement but never doing it. It is not really desirable

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

//! Above two import, we are importing the same module twice this is not a problem but generally this is not a used case...

//! Mix Style
// import add, {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js'
// add('pizza', 5)
// console.log(price, totalQuantity)
// addToCart('bread', 3)

//??? Finally we stated that import and export are have an live connection... (!!!!!!)
//! Below we see that above cart import not simply a copy of the value that we export. If it was we should get empty array
//! Actually they are same object...

import { cart } from './shoppingCart.js'
add('pizza', 5)
add('bread', 3)
add('apples', 6)
console.log(cart)
