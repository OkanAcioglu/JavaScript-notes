//! Besides native ES6 modules and module pattern there are also other module systems that have been used in JS in the past but they rely on some external implementations
//! Two examples are AMD Module and CommonJS Module
//? CommonJS Module have been used in Node.js for almost all of its existence. So only very recently ES modules have been implemented in Node.js
//? Node.js is a way of running JS server outside of a browser. Big consequence of this is almost all the module in the NPM repository that we can use still use the CommonJS module system. Reason for that is NPM was originally only intended for node which uses CommonJS
//? Only later NPM become the standard repository for the whole JS world now we are basically stuck with CommonJS
//? So we will see a lot of CommonJS still around

//! Just like ES6 Modules in CommonJS one file is one module and we export smth. from module using "export." and name of the export. This export here is basically object
//! Below code will not work on browser but it will work on Node.js
//! Then for import smth. require() will used and it is defined at Node.js because this is part of CommonJs specifitation

// EXPORT
// export.addToCart =  function (product, quantity) {
//     cart.push({ product, quantity })
//     console.log(`${quantity} ${product} ordered from supplier `)
//   }

// IMPORT
const { addToCart } = require('./shoppingCart.js')
