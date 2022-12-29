'use strict'
//! flat method
// Let say we have nested array(1 level of nesting)

const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arr.flat())
// Using flat we removed nested arrays and flattened the array.

const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8]
console.log(arrDeep.flat())
// Still contains the 2 inner arrays. Means that flat goes one level of deep when flattening
// flat method as a default goes 1 level deep
console.log(arrDeep.flat(1)) // same result as above
// to go deeper just increase the level of deep of the flat
console.log(arrDeep.flat(2)) // fully flattened

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}
const accounts = [account1, account2, account3, account4]

// Calculating Overall Balance
const accountMovements = accounts.map((acc) => acc.movements)
console.log(accountMovements) // movement in array as nested arrays
const allMovements = accountMovements.flat()
console.log(allMovements) // all movements flattened in array
const overallBalance = allMovements.reduce((acu, mov) => acu + mov, 0)
console.log(overallBalance)

// Calculating Overall Balance chaining
const overallBalance2 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acu, mov) => acu + mov, 0)
console.log(overallBalance2)

//! flatMap
// flatMap method is combination of flat method and map method with a better performace
const overallBalance3 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acu, mov) => acu + mov, 0)
console.log(overallBalance3)

//!!! Keep in mind that in flatMap method flat is just go one level deep so if we in need of goin further deep we have to flat and map method separately.
