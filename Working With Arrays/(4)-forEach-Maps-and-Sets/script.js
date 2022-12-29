'use strict'

//! RECALL that each of the inner arrays are one entry of the map. In each inner array; first element (ex: "USD") is key and second element (ex: "United States Dollar") is value.
const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
])
// forEach for MAPS
// Same as the forEach method for array, here callback functions parameters have same order and have same parameters.
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

// forEach for SETS
const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`)
  console.log(set)
})
