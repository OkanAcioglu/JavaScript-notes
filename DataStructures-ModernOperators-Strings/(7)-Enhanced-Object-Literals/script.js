'use strict'
// * This restaurant object is object literal, because we basically wrote this object literally using this curly braces syntax.
//! With ES6 -> there is 3 ways which makes writing object literals more easy...

// third enhancement is that we can now compute property name instead of having to write them out manually or literally
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
// We took openingHours property out of the restaurant object and simply create an another object outside of it
const openingHours = {
  [weekDays[3]]: {
    // we can use third enhancement here as it show instead of direct writing
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day ${2 + 4}`]: {
    // we can write any expression we want actually.
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
  openingHours, //? now we can directly write it but if variable name of the object changed we have to changed it here too...
  //openingHours: openingHours, // old way
  order(starterIndex, mainIndex) {
    return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]]
  }, //? We can get rid of 'function' and also the semicolon.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = 20.0,
    adress,
  }) {
    console.log(
      `Order Recieved! ${this.staterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}   `
    )
  }, // old way
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
