'use strict'

const airline = 'TAP Air Portugal'
const plane = 'A320'

// Get a character from certain position
console.log(plane[0]) // A (string)
console.log(plane[1]) // 3 (string)
console.log('B737'[0]) // B

// Lenght of string
console.log(airline.length) // 16
console.log('B737'.length) // 4

//! ------------- Methods ------------------
// ?indexof()
console.log(airline.indexOf('r')) // 6 // Gives first occurence
console.log(airline.lastIndexOf('r')) // 10 // Gives last occurence
//? space is also count as character...
console.log(airline.indexOf('Portugal')) // 8 // Search for word , Occur at position 8 // Case sensative

// ?slice()
console.log(airline.slice(4)) // Air Portugal // 4 is index that slice begin.
// Extracted string called "substring" because it is part of the original string.
// Original string does not change
//! It is impossible to mutuate strings because they are primitive.
//! If we wanted to use extracted string, we have to store it into variable or data structure.
console.log(airline.slice(4, 7)) // Air // 4 is index that slice begin and 7 is index that slice end.
// End value does not included in the substring.

// * Many times we dont know the string that we receive.
// * Lets try to extract first word of the string without knowing indexs.
// First word of String
console.log(airline.slice(0, airline.indexOf(' '))) // TAP // first word starts with index of 0 and goes until the first space.

// Last word of String
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) // Portugal

// Negative start argument
console.log(airline.slice(-2)) // al // Extracting starts from end of the string
// Last character got index of -1

// Negative end argument
console.log(airline.slice(0, -1)) // TAP Air Portuga

// Application
const checkMiddleSeat = function (seat) {
  // B and E are middle seats.
  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log('Your seat is in the middle')
    : console.log('Your seat is not in the middle')
}

checkMiddleSeat('11B')
checkMiddleSeat('11D')
checkMiddleSeat('11E')

//! Strings are primitives so why do they have methods??
//? What JS do is that whenever we call a method on a string JS will automatically behind the scenes conver that string primitive to a string object with the same content
//? And it is on that object where the methods are called. All this process called "boxing"
//? It takes our string and puts it into a box which is the object
//? When operation done, string object converted back to the primitive string
//? All string methods return primitives even if it is called on a string object
console.log(new String('Okan'))
console.log(typeof new String('Okan')) // object
console.log(typeof new String('Okan').slice(-1)) // string

//? toLowerCase()
//? toUpperCase()
console.log(airline.toLowerCase()) // tap air portugal
console.log(airline.toUpperCase()) // TAP AIR PORTUGAL

//? trim()
console.log('  Okan   ACIOĞLU  \n'.trim()) // Okan   ACIOĞLU
// trim at the end and the start of the string but not the middles

// Fix capitalization in name
const passenger = 'oKaN'
const passengerLower = passenger.toLowerCase()
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

// Comparing email
const email = 'hello@okan.com'
const loginEmail = '  Hello@Okan.Com \n'

//const lowerEmail = loginEmail.toLowerCase()
//const trimmedEmail = lowerEmail.trim()
//console.log(trimmedEmail) // We can directly use methods with chaining

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail) //true

//? replace()
const priceGB = '288,97€'
const priceUS = priceGB.replace('€', '$').replace(',', '.') // First input argument is the one we want to replace and second input argument is the one that will replace the first one.
console.log(priceUS) // 288.97$

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate')) // All passengers come to boarding gate 23. Boarding door 23! // only replace the first occurence

// Using regular expression
console.log(announcement.replace(/door/g, 'gate')) // we use regular expression to replace all door in the text with gate.
// Here we use slash instead of ticks and we add g that is mean global.

//? replaceAll()
console.log(announcement.replaceAll('door', 'gate')) // All passengers come to boarding gate 23. Boarding gate 23! // now all first input data replaced with second input data

//? includes()
const plane1 = 'Airbus A320neo'
console.log(plane1.includes('A320')) //true
console.log(plane1.includes('A323')) //false

//? starsWith()
console.log(plane1.startsWith('Air')) // true
console.log(plane1.startsWith('Ai')) // true

// Application
const checkBaggage = function (items) {
  const baggage = items.toLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board')
  } else {
    console.log('Welcome')
  }
}
checkBaggage('I have a laptop, some food and a pocket Knife')
checkBaggage('I have socks and camera')
checkBaggage('Got some snacks and a gun for protection')

//? split()
console.log('a+very+nice+string'.split('+')) // ['a', 'very', 'nice', 'string'] , comes Array
console.log('Okan ACIOĞLU'.split(' ')) // ['Okan', 'ACIOĞLU'] , comes Array
console.log('Okan ACIOĞLU'.split('')) // ['O', 'k', 'a', 'n', ' ', 'A', 'C', 'I', 'O', 'Ğ', 'L', 'U']
// split the each element of the string according to the input data and store them into the array one by one.
const [firstName, lastName] = 'Okan ACIOĞLU'.split(' ')
console.log(firstName)
console.log(typeof firstName)
console.log(lastName)
console.log(typeof lastName)

//? join()
// join the each element of the array according to the input data and a one single string.
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName) // Mr. Okan ACIOĞLU
const newName1 = ['Mr.', firstName, lastName.toUpperCase()].join('-')
console.log(newName1) // Mr.-Okan-ACIOĞLU
const newName2 = ['Mr.', firstName, lastName.toUpperCase()].join('')
console.log(newName2) // Mr.OkanACIOĞLU

//!!! split() and join() combination is very strong and will be used a lot.

// Application
const capitalizeName = function (name) {
  const nameArr = name.split(' ')
  const nameUpper = []
  for (const words of nameArr) {
    nameUpper.push(words[0].toUpperCase() + words.slice(1))
    //nameUpper.push(words.replace(words[0], words[0].toUpperCase())) // another approach
  }
  console.log(nameUpper.join(' '))
}
capitalizeName('okan acıoğlu gaziantep')
capitalizeName('hello world')

// Padding
// to add a number of characters to the string until the string has a certain desired lenght.
//? padStart()
const message = 'Go to Gate 23'
console.log(message.padStart(25, '+')) // ++++++++++++Go to Gate 23
// Add desired input start of the string.
// First input states the desired lenght at the end of the addition
// Second input states the which data will be added
//? padEnd()
const message2 = 'Go to Gate 23'
console.log(message2.padEnd(25, '+')) // Go to Gate 23++++++++++++
// Add desired input end of the string.
// First input states the desired lenght at the end of the addition
// Second input states the which data will be added

console.log(message.padStart(20, '-').padEnd(27, '*'))

// Application
const maskCreditCard = function (number) {
  const cardNumber = number.toString()
  //const cardNumber = number + '' // another way of number to string
  const cardNumberLenght = cardNumber.length
  const lastFour = cardNumber.slice(-4)
  const masked = lastFour.padStart(cardNumberLenght, '*')
  console.log(masked)
}
maskCreditCard(1234567890111213)

//? repeat()
// Repeat same string multiple times
const message3 = 'Bad weather, all departures delayed... '
console.log(message3.repeat(5)) // input number states how many times it will be repeated.

// Application
const waitingPlane = function (n) {
  console.log(`There are ${n} plane waiting to take off ${'✈'.repeat(n)}`)
}
waitingPlane(5)
waitingPlane(8)
waitingPlane(3)

//? concat()
const word1 = 'Hello'
const word2 = 'World'
const word3 = "I'am"
const word4 = 'Okan'
console.log(word1.concat(' ', word2, ' ', word3, ' ', word4))

//? at()
console.log('okan'.at(0)) // o
