'use strict'
//? ---------------- INTRODUCTION TO MAP -----------------
// * in JS map is a data structure that we can use to map values to keys.
// * Like objects data is stored in key value pairs in maps.
// * Difference is that in maps, the keys can have any type.

// Easiest way to create a map is creating an empty map...
const rest = new Map()
// Then fill up the map with set method...
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze,Italy')
// Using set method also returns the map
console.log(rest.set(2, 'Lisbon,Portugal'))
// We can easily chain the set method...
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are closed :(')
// In order to read data from the map, we use get method...
console.log(rest.get('name'))
console.log(rest.get(true))

const time = 21
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))) // inside of inner get comes true or false and then inside of outer get is just true and false. Depend on the key that stored in the true or false will be then called.

// Check whether an key value exist or not with has method
console.log(rest.has('categories'))
console.log(rest.has('happen'))

// Delete the any key with using delete method.
rest.delete(2)
console.log(rest)

// Learn the size of the map we can use size property
console.log(rest.size)

// To remove all the element from the map we can use clear
rest.clear()
console.log(rest)

// We can use arrays and objects as a map keys...
rest.set([1, 2], 'Test')
console.log(rest)

// Calling array type key value
const rest2 = new Map()
rest2.set([1, 2, 3], 'Example')
console.log(rest2)
console.log(rest2.get([1, 2, 3])) // we cannot get the key value with directly writing array like that.
// Why? Because they are totally different objects in the heap
// Instead we need to store the array in variable and then we can get the value
const rest3 = new Map()
const arr = [1, 2, 3]
rest3.set(arr, 'Example')
console.log(rest3)
console.log(rest3.get(arr)) // Now it is work...

// We can use maps in DOM elements
const rest4 = new Map()
rest4.set(document.querySelector('h1'), 'Heading')
console.log(rest4)

//? ---------------- MAPS: ITERATION -----------------
// * Beside set method there is another way of populating a map

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!!'],
  [false, 'Try Again'],
])
console.log(question)

const openingHours = {
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
}
console.log(Object.entries(openingHours))

//! Convert object to Map
// Above two structures are exatly the same
// So there is easy way to convert object to maps

const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

//! Iteration
// Quiz APP
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value} `)
}

const answer = Number(prompt('Your Answer'))
console.log(answer)

console.log(question.get(question.get('correct') === answer))

//! Convert Map to Array
// Sometimes we need to convert map back to the array
console.log([...question])
console.log([...question.keys()]) // All keys in array
console.log([...question.values()]) // All values in array
