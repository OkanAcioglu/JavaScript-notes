'use strict'
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
}
console.log(openingHours)
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Pirenze Italy  ',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  staterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = 20.0, adress }) {
    console.log(
      `Order Recieved! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}   `
    )
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    )
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

// * We can loop over objects which are not iterable with a indirect way
// We have different options that what we want to loop over.
// We will array and for of to loop over the object.

//? Loop over property(key) names

const properties = Object.keys(openingHours)
console.log(properties) // ['thur', 'fri', 'sat'] -> Array with 3 property names
let openStr = `We are open ${properties.length} days: `
for (const day of Object.keys(openingHours)) {
  openStr += `${day},`
}
console.log(openStr)

//? Loop over property values

const values = Object.values(openingHours)
console.log(values) // -> Array with only values as object.

//? Entire object
const entries = Object.entries(openingHours)
console.log(entries) // -> Array with arrays that contain key and value itself as object

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`) // Arrays for each key and each value (as object) in a array
}
