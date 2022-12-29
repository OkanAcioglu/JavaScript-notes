'use strict'

// * JS has some "built-in functions" that can apply "directly" "on arrays".
// * These are called "methods" and we can think that as "array operations"

const friends = ['Michael', 'Steven', 'Peter']

// ! "push" is a "method", "technically function" that "adds element" to the "end of an array"
// ! Since "push" is a function it will return smth. Here return with "lenght of the new array"
const newLenght = friends.push('Jay')
console.log(friends)
console.log(newLenght)

// ! "unshift" is a "method" that "adds element" to the "beginning of an array"
// ! Here return with "lenght of the new array"
const newLenght2 = friends.unshift('John')
console.log(friends)
console.log(newLenght2)

// ! "pop" is a "method" that "remove last element" from the array.
// ! Here return with "Removed element"
const removedElement = friends.pop()
console.log(friends)
console.log(removedElement)

// ! "shift" is a "method" that "remove first element" from the array.
// ! Here return with "Removed element"
const removedElement2 = friends.shift()
console.log(friends)
console.log(removedElement2)

// ! "indexOf" is a "method" that show the "index of an element"
console.log(friends.indexOf('Steven'))
// ! "indexOf" gives (-1) if the searched "value" is not in the array.
console.log(friends.indexOf('Okan'))

// ! "includes" another "method" that used for find "index of an element" that coming with ES6.
// ! Return with "boolean"
// ! Test with "strict equality"
// ! Very usefull for "conditionals"
console.log(friends.includes('Steven'))
console.log(friends.includes('Okan'))

friends.push(23)
console.log(friends.includes('23')) // false (There is no "type coercion")
console.log(friends.includes(23)) // true

if (friends.includes('Steven')) {
  console.log(`You have a friend called Steven`)
}

// ?----------------------APPLICATION--------------------------

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15
  } else {
    return bill * 0.2
  }
}
const calcTotal = function (x) {
  const total = calcTip(x) + x
  return total
}

const tip = calcTip(100)
console.log(tip)

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

const totals = [calcTotal(bills[0]), calcTotal(bills[1]), calcTotal(bills[2])]
console.log(totals) // Application of function calling function

const totals2 = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
]
console.log(totals2) // Application of direct sum
