'use strict'
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
}

const menu = [...restaurant.staterMenu, ...restaurant.mainMenu]
// Automatically loop over the entire array.
// Each iteration we can access the current element with 'item'
// 'item' can be anythink it is like parameter of the function
// We can still use the 'continue' and 'break' keywords
for (const item of menu) console.log(item)
// If we want both the index and element itself we will use 'entries' method.
// Each iteration gives us a string that first element is index and second element is element of the looped array.
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`)
} // old way

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`)
} // modern way with using array destructuring

const arr = ['Okan', 'Ahmet', 'Mehmet']
const arrEntries = arr.entries()
console.log(arrEntries.next().value)
console.log(arrEntries.next().value)
console.log(arrEntries.next().value)
