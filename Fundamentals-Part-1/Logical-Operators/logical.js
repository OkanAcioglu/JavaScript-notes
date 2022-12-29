// * "Boolean Logic" is "banch of computer science" which uses "true and false values" to solve complex problems
// * For that uses several "logical operators" to combine "true and false values"

// ? "AND" (&&) operator -> return "true" if all situations "true" otherwise return "false"
// ? "OR" (||) operator -> return "true" if one of the situation is "true" if all situations "false" return "false"
// ? "NOT" operator -> acts on "only one value" and "interchange" its "value". If value is "true" "change it" to "false".
// !!! "NOT" operator has a "precedence" on "AND" and "OR" operators.

const age = 16
const A = age >= 20 // false
const B = age <= 30 // true
const C = !A // true
const D = A && B // false
const E = A || B // true
const F = !A && B // true
const G = A && !B // false
const H = !A || B // true
const J = A || !B // false

console.log(A, B, C, D, E, F, G, H, J)

const hasDriverLicense = true
const hasGoodVision = true
const isTired = true
if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive...')
} else {
  console.log('Someone else should drive...')
}

// !!! "OR" operator (||) search first "truthy" otherwise left from the last "value"
console.log('monday' || 'tuesday') // "monday"
console.log(null || 'friday') // "friday"

// !!! "AND" operator (&&) search first "falsey" otherwise left from the last "value"
console.log('çarşamba' && 'sunday') // "sunday"
console.log(null && 'perşembe') // null

//? ----------------------EXAMPLE-----------------------

const result = false || {} || 20 || null
console.log(result) // {} ,undefined

let data = 'true'
console.log(!'data') // false (NOT coerce the string and transform it boolean)
console.log(typeof !'data') // boolean
