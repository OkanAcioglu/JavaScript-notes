'use strict'
// * Opposite of the spread. Spread operator is to unpack an array while 'rest' is to pack elements into an array.
//! Destructuring
// SPREAD operator because on RIGHT side of the Equal Sign (=)
const arr = [1, 2, ...[3, 4]]

// REST because on LEFT side of the equal sign (=)
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others) // REST PATTERN collects the elements that are unused in the destructuring assignment.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Pirenze Italy  ',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  staterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    adress,
  }) {
    console.log(
      `Order Recieved! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}   `
    )
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    )
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.staterMenu,
]
console.log(pizza, risotto, otherFood)
// Rest patter do not pass any element so it must be at the end of the structure...
// with same logic there can be only 1 rest pattern element on the structure...

// Objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays)

//! Functions
const add = function (...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]
  console.log(sum)
}
add(2, 3)
add(5, 3, 7, 2)
add(5, 3, 7, 2, 8, 2, 9)

const x = [23, 5, 8]
add(...x)
// Rest Parameter
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')
