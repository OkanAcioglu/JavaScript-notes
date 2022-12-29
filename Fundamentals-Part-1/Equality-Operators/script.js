// * Just like the "comparison operators", "equality operators" will return a "boolean" value.
// * "Strict equality" (===) operator differenciates with "loose equality" (==) that there is no "coercion" in the "strict equality"; both "value" should exactly be the same.
//! 18 == "18" -> true , 18 === "18" -> false
const age = '18'
if (age === 18) {
  console.log('You just became an adult!! (strict)')
}
if (age == 18) {
  console.log('You just became an adult!! (loose)')
}

//? For a clean code always use "strict equality" !!!

const favourite = prompt('What is your favorite number??')
console.log(favourite) // 23
console.log(typeof favourite) // string

if (favourite == 23) {
  // "23" == 23
  console.log('Cool! 23 is an amazing number!')
}

const favourite1 = Number(prompt('What is your favorite number??'))
console.log(favourite1) // 23
console.log(typeof favourite1) // number
if (favourite1 === 23) {
  // 23 === 23

  console.log('Cool! 23 is an amazing number!')
} else if (favourite1 === 7) {
  console.log('7 is an amazing number!')
} else if (favourite1 === 9) {
  console.log('Cool! 23 is an amazing number!')
} else {
  console.log('Number is not 23 , 7 or 9')
}

// * There is opposite of "equality operator" that used for "not equal".
// * That is (!==) operator which is "strict" version and (!=) is "loose" version. But always use "strict"

const favourite2 = Number(prompt('What is your favorite number??'))
if (favourite2 !== 23) console.log('Why not 23?')

//? -------------------EXAMPLE--------------------------

let a11 = 1
let c11 = 2
console.log(--c11 === a11) // true -> c önce bir azaltılır sonra eşitliğe bakılır.
