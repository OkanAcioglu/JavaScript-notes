'use strict'
// * Destructuring -> Way of unpacking values from an object into separate variables.
//!!---------------------------- DESTRUCTURING ARRAYS --------------------------------
const arr = [2, 3, 4]
// Normal Way
const a = arr[0]
const b = arr[1]
const c = arr[2]
// Destructuring
const [x, y, z] = arr // all variables decleared at the same time
console.log(x, y, z)
console.log(arr) // original array did not affected

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Pirenze Italy  ',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  staterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}
console.log(restaurant)

const [first, second] = restaurant.staterMenu //do not have to take all of the element, this case only first and second element of array(follow the order of the array)
console.log(first, second)

let [main, , secondary] = restaurant.categories // take first and third element with making hole with comma
console.log(main, secondary) // Italian Vegetarian

//! When we want to exchange the main and secondary
//? With primitive way
//const temp = main //temporary variable
//main = secondary
//secondary = main
//console.log(main, secondary) // what Italian now Vegetarian and what Vegetarian is now Italian
//? With Array Destructuring
;[main, secondary] = [secondary, main] // do not need temporary variable
console.log(main, secondary)

//! Recieve 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

const nested = [2, 4, [5, 6]]
//const [i, , j] = nested
//console.log(q, w)
const [i, , [j, k]] = nested // Nested destructuring
console.log(i, j, k)

// Set Default Value (When we do not know the lenght of array)
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r) // took undefinied for "r" before set them equal "1" but after assigning "1" it will be "1". Moreover if any element in the array will be dropped; assigned variable to this element now will be have a value of "1"

//!!---------------------------- DESTRUCTURING OBJECTS --------------------------------

const restaurant2 = {
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
}

// Use curly brackets, exatly match the property name,order is not important in array so we do not net a hole to pass elements.
const { name, openingHours, categories } = restaurant2
console.log(name, openingHours, categories)

// Variable names different from the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant2
console.log(restaurantName, hours, tags)

// Like arrays we can assign default value for
const { menu = [], staterMenu: staters = [] } = restaurant2 // Since there is no menu property in the object, if we do not set a default value as [] we will get undefined.
console.log(menu, staters)

// Mutuating Variables
let m = 111
let n = 999
const obj = { m: 23, n: 7, c: 14 }
//{ m, n } = obj // We get error because normally we cant equate a code block smth. For fix this use paranthesis.
;({ m, n } = obj)
console.log(m, n)

// Nested Objects
const {
  fri: { open: o, close: clo },
} = openingHours
console.log(o, clo)

// Since in the "method" we put the object as an parameter order is not important now only important think is property should be same.
restaurant2.orderDelivery({
  time: '22.30',
  adress: 'Via del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
})

// Also with using default values that assigned to the parameter in the method, we do not have to have all the arguments match with the parameter since default values will come for this properties.
restaurant2.orderDelivery({
  adress: 'Via del Sole 21',
  mainIndex: 2,
})
