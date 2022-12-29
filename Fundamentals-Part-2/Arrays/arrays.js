// * "Arrays" are such "data structure" that like a big container into which we can throw "variable" and then we can reference them.

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

// * "Array" created by using "brackets ([])"
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

// * Another way of creating "Array"
const years = new Array(1991, 1984, 2000, 2020)
console.log(years)

// * To reach element of an "Array" use "bracket" and inside of "bracket" use "index number"
// * Note that "index numbers" of "Array" elements starts from "zero (0)"
console.log(friends[0])
console.log(friends[2])

// * To learn the how many element that "array" have, use (.lenght) property.
// * It is not "zero" based.
console.log(friends.length)

// * To reach last element of "array" we can use "lenght" property.
console.log(friends[friends.length - 1])

// ! We can write "not just a number" but we can write any "expressions" JS expect a "expression" inside the "bracket" not a "statement"
// ! "Expression" means something that produces a "value".
// ! We cannot put "statement" into the "brackets"

// * We can mutuate any element of the "array"
friends[2] = 'Jay'
console.log(friends)

// ! How can we change the element of the array although its "variable" type "const" ??
// ! Because actually "array" is not a "primitive value". Only "primitive values" are immutable.
// ! What we cannot do is we cannot change whole "array" with another "array".
// friends = ['Bob', 'Martin'] // Now we get a error.

// * "Array" can hold "values" with a different type all at the same time.
// * "Array" can also hold "expressions"
// * "Array" can holds another array.
const lastName = 'Acıoğlu'
const age = '28'
const okan = ['Okan', lastName, 2037 - 1993, age, friends]
console.log(okan)

// * When we add some "number" to "array" , "array" will transforme to "string"
console.log(okan + 13)
console.log(okan - 13) // NaN

// -----------------EXERCISE---------------------

const calcAge = function (birthYear) {
  return 2037 - birthYear
}
const yearss = [1980, 1999, 2016, 2022]

// console.log(calcAge(yearss)) // What not to do...

const age1 = calcAge(yearss[0])
const age2 = calcAge(yearss[1])
const age3 = calcAge(yearss[years.length - 1])
console.log(age1, age2, age3)

// * Better way is directly construct a "array"
const ages = [
  calcAge(yearss[0]),
  calcAge(yearss[1]),
  calcAge(yearss[years.length - 1]),
]
console.log(ages)

//? ---------------------- EXAMPLES ------------------------

const numbers = [1, 2, 3]
numbers[6] = 11
console.log(numbers) // [1,2,3,emptyx3,11]
console.log(numbers[5]) // undefined
console.log(numbers.length) // 7
