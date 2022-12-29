'use strict'
// * Before ES6 JS have only little built-in data structures. Basically array and objects.
// * With ES6 two more data structure introduced. Sets and maps.

//! SETS
// Collection of unique values
// Never have duplicates

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]) // Can hold mixed data types.
console.log(ordersSet) // Looks like array, No key value pairs,just a bunch of values

console.log(new Set('Okan'))
console.log(new Set()) // can be empty.

console.log(ordersSet.size) // 3
console.log(ordersSet.has('Pizza')) //true
console.log(ordersSet.add('Tomato')) // tomato added
console.log(ordersSet.add('Tomato')) // this will be ignored
console.log(ordersSet.delete('Risotto')) // true
//console.log(ordersSet.clear()) // {} , set will be cleaned
console.log(ordersSet)

// In sets there are actually no indexes and no way the getting value out of set.
// Think as if values are unique and if order does not matter then there is no point of retrieving values out of set.

for (const order of ordersSet) console.log(order) // Sets are iterable

// Main use case of set is remove duplicated values of arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// We wanna somehow want to know how many positions are we have
const staffUnique = new Set(staff)
console.log(staffUnique) // now we want this set to convert array
const staffUnique1 = [...new Set(staff)]
console.log(staffUnique1)

// If we wanted to know only the how many different positions there are? Then use size property...
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
) // 3 , little bit weird but it is work.

// With same logic we can count how many different letters in the string...
console.log(new Set('Hello World').size) // 8
