// Exporting Module
console.log('Exporting Module')

const shippingCost = 10
export const cart = [] //? (!!!!!!)

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity })
  console.log(`${quantity} ${product} added to the cart`)
}

//? (***) Below will not work
// if (true) {
//   export const addToCart = function (product, quantity) {
//     cart.push({ product, quantity })
//     console.log(`${quantity} ${product} added to the cart`)
//   }
// }

const totalPrice = 237
const totalQuantity = 23
const totalAmount = 200
export { totalPrice, totalQuantity, totalAmount as amount } //? This is like a little bit exporting an object from module

//* (?? ?? ??)
//* Below we only exporting value (no name included)
export default function (product, quantity) {
  cart.push({ product, quantity })
  console.log(`${quantity} ${product} added to the cart`)
}
