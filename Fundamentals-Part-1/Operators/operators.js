// * "operators" allows us to "transform values" or "combine values"

// ! Matematical Operators

// ? Minus (-)
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

// ? Multiplication (*) and Division (/)

console.log(ageJonas * 2, ageSarah / 2)

// ? Exponential (**)
console.log(ageSarah ** 3, 2 ** 3)

// ? Concatenate Strings (+)
const firstName = 'Jonas'
const lastName = 'Okan'
console.log(firstName + ' ' + lastName)

// ? typeof -> gives us type of the value
console.log(typeof 'Okan')

// ? Assignment Operator (=)
let x = 10 + 5
console.log(x)

// ? Addition Assignment (+=)
let y = 15
y += 10 //! y = y + 10
console.log(y)

// ? Multiplication Assignment (*=)
let z = 15
z *= 10 //! z = z * 10
console.log(z)

// ? Subtraction Assignment (-=)
let a = 15
a -= 10 //! a = a - 10
console.log(a)

// ? Division Assignment (/=)
let b = 100
b /= 10 //! b = b / 10
console.log(b)

// ? Postfix Increment (x++)
let q = 3 // 4
let w = q++ // 3
console.log(q, w)

// ? Prefix Increment (++x)
let e = 3 // 4
let r = ++e // 4
console.log(e, r)
// ? Postfix Decrement (x--)
let t = 3 // 2
let ü = t-- // 3
console.log(t, ü)

// ? Prefix Decrement (--x)
let u = 3 // 2
let i = --u // 2
console.log(u, i)

// ? Remainder (%)
// ! Returns the "remainder left" over when "one operand" is "divided" by a "second operand". It always takes the "sign of the dividend".

console.log(13 % 5) // 3
console.log(-13 % 5) // -3
console.log(13 % -5) // 3

// ! Comparison Operators
// * Used for create "boolean" values.
// * Normally Stored in "variable"
console.log(ageJonas > ageSarah)
console.log(ageJonas < ageSarah)
console.log(ageJonas >= ageSarah)
console.log(ageJonas <= ageSarah)

const isFullAge = ageSarah <= 18
console.log(isFullAge)

// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(10 > 9 > 8 === true) // false
