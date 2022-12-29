'use strict'
// * use "spread operator" to basically expand an array into all its elements. In other words unpacking all the array elements at one.

const arr = [7, 8, 9]
// Primitive
const badNewArray = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArray)
// Spread
const goodNewArray = [1, 2, ...arr] // if we dont use spread operator the nested array will be created.
console.log(goodNewArray)
// Whenever we need element of an array individually,then we can use spread operator.
console.log(...goodNewArray) // with spread
console.log(1, 2, 7, 8, 9) // primitive

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
}

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu) // we completely create a new array; we do not manipulate original(mainMenu) array

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu]
//Join Two Array or More
const menu = [...restaurant.staterMenu, ...restaurant.mainMenu]
console.log(menu)

// Spread operator work on all iterables
// Iterables are things like arrays,strings,maps or sets but not objects.
const str = 'Okan'
const letters = [...str, ' ', 'A.']
console.log(letters)
// Multiple values separated by comma usually only expected when we pass arguments to the function or when we build a new array.
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
]
console.log(ingredients)
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]) // primitive
restaurant.orderPasta(...ingredients) // with spread operator

// With ES6, although objects are not iterable, spread operator also work on them.
// Objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1998 }
console.log(newRestaurant)
// Shallow Copy on Object
const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name)
