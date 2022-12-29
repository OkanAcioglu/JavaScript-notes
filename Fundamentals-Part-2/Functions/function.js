//?------------------FUNCTIONS-------------------------

// * Piece of code that can reuse over again.
// * Like variable but variable holds value but function can hold one or more complete lines of code.

// * Below "logger" is "function name" and "inside curly brackets" called "function body"
function logger() {
  console.log('My name is Okan') // * Somewhere in code, we need this piece of code.
}
logger() // invoking / calling / running function
logger()
logger() // can be used as much as we want.

// * Function can also "receive data" and "return data" back
// * Inside the "parantheses" we can specify smth. called "parameters".
// * Like variables, "parameters" "only specific" for the "function". Like a "local variable" that is only available inside of a "function"
// * "parameters" represent "input data" of the "function"
// * "return" will result of the "executed function"
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges. `
  return juice
}

fruitProcessor(5, 0) // * actual parameters are called "arguments"

// !!! important to the note that "parameters" and "arguments" used as they were the same. This is note a big deal but keep in mind that "parameters" is kinda "placeholder" in the function and "arguments" is then actual value that we will use to fill in that "placeholder"

// * Where is "juice" ??
// * "juice" is basically result of the running "function" is the juice that we just returned.
const appleJuice = fruitProcessor(5, 0) // * We save the "value"

console.log(fruitProcessor(5, 0))
console.log(appleJuice)

// * We can reuse "function" with "different input values" then get a "different output".
const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

// * Without "calling function" , "function" will never executed.
// * not all "function" don't have be "return" smth.
// * not all "function" don't have be "accept parameters"

// * First "function" example did not take "variable" so when "calling the function" "input" that we write into the "parameters" will not affect the result.
// * Also first "function" do not "return" anythink just print a message to the "console"
logger(23)
logger('okan')

//? -------------FUNCTION DECLARATIONS VS EXPRESSIONS-----------

// * Above "functions" called "function declarations" because simply "function" keyword used to "declare" (bildirim,beyan) a "function". A bit like we declare a "variable"

// ! Function Declaration
function calcAge1(birthYear) {
  // const age = 2037 - birthYear
  // return age
  // * Or we can simply write:
  return 2037 - birthYear
}
const age1 = calcAge1(1991)

// ! Function Expression
// * We define a "function" in a similar way but we did not give a name (Anonymous Function)
// * Here "function" itself is a "value"
// * In fact in JS "functions" are just "values"
const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}
const age2 = calcAge2(1991) // * "call function" in a similar way.

console.log(age1, age2)

// !!! We can call "function declarations" before they defined in the code, "function expressions" we can not.
// !!! Which one will we use? It depends on the "coder" and "situation"

//?------------------------------ARROW FUNCTION-------------------------------

// * "arrow function" is a special case of "function expression"
// * It is usefull for "simple one-liner functions" because there is "no brackets" and "return"
// ! Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear
const age3 = calcAge3(1991)

console.log(age1, age2, age3)

// * When code get more complicated as need more than 1 lines or more, we need "bracket" again and also need "return"
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))

// !!! What type of function should I use??
// !!! There is a differences between arrow functions and traditional functions that arrow functions do not get "this" keyword. (Topic of future)

//? ------------------- FUNCTIONS CALLING OTHER FUNCTIONS--------------------------

function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges. `
  return juice
}

console.log(fruitProcessor(2, 3))

//?-------------------------APPLICATIONS-------------------------------------

// !!! Below "2" functions (one is inside in another) took same "variable" as "birtYear" But this is not a problem that they are "completely different" and they are "local variable" for each function. Moreover we can define "variable" outside of the functions called "birthYear".

const calcAge4 = function (birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
  const age = calcAge4(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement
  } else {
    console.log(`${firstName} has already retired🎉`)
    return -1
  }
}

// !!! We can put "return" statement into the "if" block
// !!! Keep in mind that when
// !!! Number (-1) in the "else block" is kind of a standard number in programming that it has no meaning
// !!! "Return" keyword will return the that we will tell it to turn and after that immediately exit the function.

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const avgDolphins = calcAverage(100, 50, 80)
const avgKoalas = calcAverage(80, 50, 80)

const checkWinner = function (dolphinsScore, koalasScore) {
  if (dolphinsScore >= 2 * koalasScore) {
    console.log(`Dolphins win🏆 (${dolphinsScore} vs ${koalasScore})`)
  } else if (koalasScore >= 2 * dolphinsScore)
    console.log(`Koalas win🏆 (${koalasScore} vs ${dolphinsScore})`)
  else {
    console.log('No team wins...')
  }
}
checkWinner(avgDolphins, avgKoalas)
checkWinner(511, 48)

// ! Default,if we don't "assign" a "argument" to the "parameter" in the "function" , "argument" will "assumed" as "undefined"
function sayHi(name) {
  return `Hi there,${name}`
}
console.log(sayHi()) // Hi there,undefined

// ! "const" and "let" "variable" are "block scoped". They cannot be reached outside of the "block".
// function checkAge(age) {
//   if (age < 18) {
//     const message = 'Sorry, you are too young'
//   } else {
//     const message = 'Yay! You are old enough!!'
//   }
//   return message
// }
// console.log(checkAge(21)) // Reference Error.

//? -----------------------EXAMPlES---------------------------

const hesapMakinasi = function (a, b) {
  const toplam = a + b
  return toplam
}
const cevap = hesapMakinasi(1, 3)
console.log(cevap) // 4

const hesapMakinası = function (a, b) {
  const toplam = a + b
  return a * b
}

const cevap1 = hesapMakinası(1, 3)
console.log(cevap1) // 3

const hesapMakinası1 = function (a, b) {
  const toplam = a + b
  return true
}

const cevap2 = hesapMakinası1(1, 3)
console.log(cevap2) // true

const hesapMakinası2 = function (a, b) {
  const toplam = a + b
  return `${a} + ${b} = ${a + b}`
}

const cevap3 = hesapMakinası2(1, 3)
console.log(cevap3) // 1 + 3 = 4

// function getAge() {
//   'use strict'
//   age = 21
//   console.log(age)
// }
// getAge()  // Reference Error

function birşeyHesaplama5(sayı) {
  if (sayı === 42) {
    return 1
  }
  if (sayı === 52) {
    return 2
  } else {
    return 'Merhaba'
  }
}
console.log(birşeyHesaplama5())

// * When we define the "parameter" of a "function" and assign another "value" on it; this means that whenever we do not put "argument" to this "parameter", "argument" of the "parameter" taken as assigned "value".
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}
sum(10)

function nums(a, b) {
  if (a > b) console.log('a is bigger')
  else console.log('b is bigger')
  return // desired return value is not in same line with return. So return will not work.
  a + b
}
console.log(nums(4, 2)) // a is bigger undefined
console.log(nums(2, 4)) // b is bigger undefined
//!!! IF WE DONT RETURN ANY VALUE IT WILL RETURN AS UNDEFINED.
//
const difference = function (num1, num2) {
  console.log(num1, num2) // 20 ''
  return num1 - num2
}
const difResult = difference(20, '')
console.log(difResult) //20
console.log(typeof difResult) // number
//
let c = 4
console.log(`c= ${c}`) // c=4

function test(a, b) {
  let c = a * b
  console.log(`Inside function c=${c}`) // c=6
  return c
}

test(2, 3)
console.log(`c after function = ${c}`) // c=4

c = test(2, 3)
console.log(`c=function() : ${c}`) // c=6
