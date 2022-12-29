// * Like "if/else statement", "loops" are also "control structure"
// * "Loops" are "fundamental aspect" that allow us to automate repetitive tasks.
// * Like below example, it is not a good practice and also violate "Dry Code Principle" that writing smth. over and over again.

// console.log('Lifting Weight repetition 1')
// console.log('Lifting Weight repetition 2')
// console.log('Lifting Weight repetition 3')
// console.log('Lifting Weight repetition 4')
// console.log('Lifting Weight repetition 5')
// console.log('Lifting Weight repetition 6')
// console.log('Lifting Weight repetition 7')
// console.log('Lifting Weight repetition 8')
// console.log('Lifting Weight repetition 9')
// console.log('Lifting Weight repetition 10')

//? ---------------- FOR LOOP -----------------
// * "For loop" is "loop" that has a "counter".
// * "For Loop" has a 3 part, between the parts; we use "semi column" (;)
// ! First Part: "Initial Value" of a "Counter".
//? Literally create a "variable", used "let" because each repetition it will change.
// ! Second Part: "Logical Condition" that evaluated before each "iteration of loop".
//? If it is "true" , "iteration" will run; if it is "false" , "iteration" stops and no more code will be "executed"
// ! Third Part: "Update counter" after "each iteration".

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting Weight repetition ${rep}`)
}
//? ---------------- LOOPING ARRAYS, BREAKING AND CONTINUING-----------------

const okanArray = [
  'Okan',
  'Acıoğlu',
  2037 - 1993,
  'Student',
  ['Michael', 'Peter', 'Steven'],
  true,
]

// * ------ Taking Value From The Array--------

for (let i = 0; i < okanArray.length; i++) {
  console.log(okanArray[i], typeof okanArray[i])
}

// * ------- Creating New Array -------

const types = [] // Create an "empty array"
for (let i = 0; i < okanArray.length; i++) {
  console.log(okanArray[i], typeof okanArray[i])
  //types[i] = typeof okanArray[i] // Creating a New Array Way 1
  types.push(typeof okanArray[i]) // Creating a New Array Way 2
}
console.log(types)

//? ------------- Application -------------
const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}
console.log(ages)

// * ------------ CONTINUE AND BREAK -------------
// ? Continue --> "Exit" the "current iteration" of the loop and "continue" to the "next one".
// ? Break --> Completely "terminate" the "whole loop".

// * -------------- Only String -----------------
for (let i = 0; i < okanArray.length; i++) {
  if (typeof okanArray[i] !== 'string') continue // Will pass the loop that is not "string"
  console.log(okanArray[i], typeof okanArray[i]) // Only "strings"
}

// * ------------- Break after Number -----------
for (let i = 0; i < okanArray.length; i++) {
  if (typeof okanArray[i] === 'number') break // Will pass the loop that is not "string"
  console.log(okanArray[i], typeof okanArray[i]) // Only "strings"
}

//? ---------------- LOOPING BACKWARDS AND LOOPS IN LOOPS ------------------

// * We want to "start" at "last index" and go to "first index".
const okanArray1 = [
  'Okan',
  'Acıoğlu',
  2037 - 1993,
  'Student',
  ['Michael', 'Peter', 'Steven'],
]
for (let i = okanArray1.length - 1; i >= 0; i--) {
  console.log(okanArray1[i])
}

// * Loops in Loops
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------STARTING EXERCISE ${exercise}------`)
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`)
  }
}

//? ---------------- WHILE LOOP ------------------
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting Weight repetition ${rep}`)
}
// * Inside "while" only thing that we write is "condition" , other two component should be written "implicitely".
let rep = 1
while (rep <= 10) {
  console.log(`WHILE:Lifting weights repetition ${rep}`)
  rep++
}
// * "while loop" is more versatile than the for loop. Because it does not need a counter variable. Whenever we need a loop without counter, we can use "while" loop or times that we don't know how many we loop.

// ? ------- Example that does not depend on a counter, instead a random variable.

console.log(Math.random()) // "returns" a "random number" that in between "0" and "1"
let dice = Math.trunc(Math.random() * 6) + 1 // "number" in between "0" and "1"

while (dice !== 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('Loop is about to end')
}

//? ----------------------CHALLENGE-------------------
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i])
  totals[i] = tips[i] + bills[i]
}
console.log(tips)
console.log(totals)

//? ---------------------CHALLENGE 2-------------------
const calcAvg = function () {
  let sum = 0
  for (let i = 0; i < bills.length; i++) {
    sum = sum + bills[i]
  }
  return sum / bills.length
}
console.log(calcAvg())
// !!! When we "decleare" a "const" "variable" inside a "loop" and when looping started, actually "at each iteration" we "do not mutuate" the "variable" so we can clearly use "const".
