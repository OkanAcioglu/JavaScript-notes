//? --------------- OBJECTS ------------------
// * Another "data structure" in JS besides "arrays" is "objects"
// * In "arrays" there is no way of giving elements a "name" so we can only reference them by their "index number". But in "objects" we can do that.
// * In "objects" we can define "key value pairs"
// * We already use "curly bracket" to define "code block" but here is "difference" that we "use it" to "define a new object"
// * "Key value pairs" must separated with "commas" and "value" that assigned can be "any type" and also can be a "expression".
// * Each of the "Key value pairs" also called "property"
// * There are "many ways" to "create an object". With using "curly brackets" maybe the simplest way and it is called "Object Literal Syntax"
// * Difference between "objects" and "arrays" that "order of the key value pairs" is "not important" at all when we want to "retrieve" them. In "arrays" it is "important a lot". Because we "call an element" in "arrays" using its "index number" but in "objects" we use "property name"

const okan = {
  firstName: 'Okan',
  lastName: 'Acıoğlu',
  age: 2037 - 1993,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
}
console.log(okan)

//? ---------------- DOT VS BRACKET NOTATION-----------------------
// * There is two way of "getting a property from an object":
// ! Dot notation
console.log(okan.lastName)
// ! Bracket notation (Should be string...)
console.log(okan['lastName'])

// * Difference between two here is "bracket notation" we can put any "expression". But in "dot notation" we must use "real property name"
const nameKey = 'Name'
console.log(okan['first' + nameKey])
console.log(okan['last' + nameKey])

const interestedIn = prompt(
  'What do you want to know about Okan? Choose between firstName, lastName, age, job, and friends'
)
console.log(okan.interestedIn) // We get (undefined) -> we get "undefinied" when we try to access a "property" that did not exists in "object"

if (okan[interestedIn]) {
  console.log(okan[interestedIn])
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  )
}
//? ---------------ADDING PROPERTY------------
okan.location = 'İstanbul' // Dot
okan['twitter'] = '@okanacioglu' // Bracket
console.log(okan)

//? -------------CHALLENGE---------------
// Write sentence without hard-code:
// "Okan has 3 friends, and his best friend is called Michael"
console.log(
  `${okan.firstName} has ${okan.friends.length} friends and his best friend is called ${okan.friends[0]}`
)
// !!! Above "dot notation" (.) (Member Access) and "brackets notation" ([]) (Computed Member Access) are just "operators" and they are also have "precedence". See the "JS Operator Precedence Table".

//? --------------- OBJECT METHODS ------------------
// * Objects can hold "different types of data" , "arrays" even "objects"
// * Recall that "functions" are really just another type of "value" then we can create a "key value pair" in which "value" is a "function"
// *

const okanVolume2 = {
  firstName: 'Okan',
  lastName: 'Acıoğlu',
  birthYear: 1993,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function (birthYear) {
    // Here "calcAge" is not "variable" but "property" of "object"
    return 2037 - birthYear
  },
}
// !!! Any "function" that is "attached" to an "object" called a "method".
// !!! "Method" is actually also a "property" that hold a "function value".

console.log(okanVolume2.calcAge(1993))
console.log(okanVolume2['calcAge'](1993))
// * Above "1993" value actually also "already defined" in "object" so we can use it for "Dry Code" principle.

// !!! In every "method" JS gives us access to a special variable called "this"
// !!! "this" keyword or "this variable" basically "equal to" the "object" on which the "method is called". In other words "object calling the method"
const okanVolume3 = {
  firstName: 'Okan',
  lastName: 'Acıoğlu',
  birthYear: 1993,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function () {
    console.log(this) // Actually okanVolume3 itself...
    return 2037 - this.birthYear
  },
}
console.log(okanVolume3.calcAge())
// !!! Why we use "this" ?? Because of "Dry Code Principle" -> If we have to change the  for example "object name" so we have to change "many things" by hand. But if we use "this" no need for that.

// !!! When we need the "call function" "multiple times", so computation in "function" will be done "multiple times". "Besides" the "easy computations", there may be some "heavier computations" and so it would be "bad practice" to do this "multiple times". Instead just calculate the "age" once (for the example case below) and "store it" in the "object" and then when we need it just, "retrieve" the age "as a property" from the "object".

const okanVolume4 = {
  firstName: 'Okan',
  lastName: 'Acıoğlu',
  birthYear: 1993,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age // not always need return if we just need this method only calculate the age.
  },
}
console.log(okanVolume4.calcAge()) //! If we don't write "return" this result coming as "undefined"
console.log(okanVolume4.age)
console.log(okanVolume4.age)
console.log(okanVolume4.age)
console.log(okanVolume4.age)

//? -------------CHALLENGE---------------
// Write sentence without hard-code:
// "Okan is a 46 years old student, and he has a driver's license"

// ------ OPTION 1--------
const okanVolume5 = {
  firstName: 'Okan',
  lastName: 'Acıoğlu',
  birthYear: 1993,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },
  hasLicense: function () {
    if (this.hasDriversLicense) {
      return 'a'
    } else {
      return 'no'
    }
  },
}
console.log(
  `${okanVolume5.firstName} is a ${okanVolume5.calcAge()} years old ${
    okanVolume5.job
  } and he has ${okanVolume5.hasLicense()} driver license`
)
// ------ OPTION 2--------
const okanVolume6 = {
  firstName: 'Okan',
  lastName: 'Acıoğlu',
  birthYear: 1993,
  job: 'student',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  },
}
console.log(okanVolume6.getSummary())

// !!!! We know that there is "array" "methods" this means that "arrays" are actually "special type of objects" that they have "functions" or in other words "methods" that we can use to manipulate them.

//? ----------------------- APPLICATION --------------------------

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}

console.log(mark.calcBMI())
console.log(john.calcBMI())
console.log(mark.bmi, john.bmi)

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}) `
  )
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) `
  )
}
