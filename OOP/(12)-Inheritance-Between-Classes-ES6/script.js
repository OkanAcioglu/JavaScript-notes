'use strict'

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  greet() {
    console.log(`Hey ${this.fullName}`)
  }
  get age() {
    return 2037 - this.birthYear
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name`)
  }
  get fullName() {
    return this._fullName
  }
  // Static Method
  static hey() {
    console.log('Hey there...')
  }
}
// To implement inheritance between ES6 class we need two ingrediants
// 1. extend keyword
// 2.super function

// extend keyword along here will link the prototypes behind the scenes
class StudentCl extends PersonCl {
  // receive same arguments as the parent class + additional ones
  constructor(fullName, birthYear, course) {
    // Now we do not need to manually call the PersonCl.call()
    // instead we call the super function
    super(fullName, birthYear)
    // super is basically the constructor function of the parent class
    // super function needs to be happen first
    // It is responsible for creating this keyword in this subclass

    this.course = course
    //! Note that if we do not need a any new properties then we do not even need a constructor function in the child class
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course} `)
  }
  calcAge() {
    // Override of the calcAge Method
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    )
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.introduce()
martha.calcAge() // Since we override the calcAge method, according to prototype chain this new method will be overrided that calcAge method coming from the parent class
