'use strict'

// * ES6 Classes are exact same thing but using nicer and more modern syntax.
// * Recall that classes in JS is not working as classical classes in the other languages and ES6 classes is just a syntactic sugar over what we learned about OOP
// * Although we used class keyword below, classes are simply another type of functions.

//! Class expression
//const PersonCl = class {}

//! Class declaration
class PersonCl {
  // Inside the class first think we need to do is to add a constructor method.
  // This constructor works pretty similar way as a constructor function but this one actually a method of this class
  // Whenever we create a new object so like a new instance, this constructor will automatically be called
  constructor(firstName, birthYear) {
    // Here we have the properties that will be stored in the new object that we want to create
    this.firstName = firstName
    this.birthYear = birthYear
  }
  // Methods will be added to .prototype property
  // It is important to understand here is that all of these methods that we write in the class (outside of the constructor) will be on the prototype of the objects and not on the objects themselves.
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  greet2() {
    console.log(`Hello ${this.firstName}`)
  }
}
const jessica = new PersonCl('Jessica', 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.__proto__ === PersonCl.prototype) // true

// Adding method to prototype manually
PersonCl.prototype.greet = function () {
  console.log(`Heyy ${this.firstName}`)
}
jessica.greet()
jessica.greet2()

//! Classes are not hoisted even if they are class declarations.
//! Classes are first-class citizens. Means we can pass them to the functions and also return them from functions.
//! Classes always executed in strict mode. Even if we did not activate it for our entire script, all the code that is in the class will be executed in strict mode.
