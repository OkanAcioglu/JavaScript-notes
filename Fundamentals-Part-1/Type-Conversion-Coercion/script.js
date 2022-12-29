// * JS can only "convert" 3 types -> "convert" to "number" to "string" to "boolean" but it cannot "convert" to "undefinied" or "null"

// ? "Type Conversion" when manually convert from 1 type to another.
const inputYear = '1991'
console.log(inputYear + 18) // 199118 //! "concatenate string
// * To converte "string" value to "number" we use "Built in function" "Number"
// * Orijinal "value" did not converted. It is still "string"
console.log(Number(inputYear) + 18) //2009
// * JS gives us "NaN" when a "value" which is "string type" that cannot be "converted" to a "number"
console.log(Number('Jonas')) // NaN

// !!! Actually "NaN" means an "invalid number" but it is still a number somehow.
console.log(NaN) // NaN
console.log(typeof NaN) // number

// * To converte "number" value to "string" we use "Built in function" "String"
// * Orijinal "value" did not converted. It is still "number"
console.log(String(23))

// ? "Type Coercion" automatically converts types behind the scenes for us happened implicitly completely hidden from us.
console.log("I'am " + 23 + ' years old') // (+) operator triggers "coercion to string"
console.log('23' - '10' - 3) // (-) operator triggers "coercion to number"
console.log('23' * '2') // (*) operator triggers "coercion to number"
console.log('23' / '2') // (/) operator triggers "coercion to number"

//! ----------------------EXAMPLES-----------------------------

let n = '1' + 1
n = n - 1
console.log(n) // 10 , number

let q = 2 + 3 + 4 + '5'
console.log(q) // 95 , string

let w = '10' - '4' - '3' - 2 + '5'
console.log(w) //15 , string

console.log(Number('Okan')) // NaN

console.log('36' - '10' - 3) //23

console.log(true + false) // 1

console.log(2 + true) // 3

console.log('2' + true) // 2true

console.log(+'aa') // NaN
console.log(-'aa') // NaN

console.log(+undefined) // NaN
console.log(-undefined) // NaN

console.log(+'35') // 35 , number
console.log(-'-35') // 35 , number

console.log(+35) // 35 , number
console.log(35) // 35 , number
console.log(-35) //-35 , number

console.log(true) // true (boolean)
console.log(+true) // 1 , number
console.log(-true) //-1 , number

console.log(+null) // 0
console.log(-null) // 0

var aa = 1
bb = aa = typeof bb
console.log(bb) // undefined

console.log(Boolean(-4)) // true , boolean
console.log(Boolean(0)) // false , boolean

console.log(typeof null) // object
console.log(typeof NaN) // number

console.log(3 * 3) // 9
console.log(3 ** 3) // 27
// console.log(3***3); // Error (unexpected token)
