'use strict'
const weekDays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']
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
  [weekDays[5]]: {
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

console.log(restaurant.openingHours.mon) // undefined.. mon is not a property of openingHours
//console.log(restaurant.openingHours.mon.open) // Error.. undefined.open is error

// To prevent this error first we must check "restaurant.openingHours.mon" exist or not.
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon)
// But this is only check for 1 property.
// We dont know also openingHours exists or not. For this:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon)

// Optional Chaining
console.log(restaurant.openingHours.mon?.open)
// Above only if the property that is before this question mark is exist then open property will be read from there. Buf if not then immediately undefined will be returned.
// And exist here actually means the nullish concept. So a property exists if it is not null and undefinied.

// Multiple Optional Chaining
console.log(restaurant.openingHours?.mon?.open)

// Example
const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day} we open at ${open}`)
}
// We dont want undefined here so with using nullish coalescing better output can be taken.

// Methods
// * We can check whether method exist or not before call it.
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// Arrays
// * We can check if an array is empty
const users = [
  {
    name: 'Okan',
    email: 'okan@gmail.com',
  },
]

console.log(users[0]?.name ?? 'User array is empty!!') // Modern
if (users.length > 0) console.log(users[0].name) // old school
else console.log('User array is empty!!')

console.log(users[0]?.surname ?? 'User array is empty!!') // Modern
if (users.length > 0) console.log(users[0].surname) // old school
else console.log('User array is empty!!')
