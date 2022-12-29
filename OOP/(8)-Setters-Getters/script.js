'use strict'

// * Setters and Getters are common to all objects in JS
// * Every object in JS have setter and getter properties
// * We call this special properties as accessor properties while the more normal properties are called data properties
// * Setters and Getters are basically functions that get and set a value so just as the name says.
// * But on the outside they still look like regular properties

//? First let take a look at getters and setters in a simple object literal
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],
  // Before the method we simply write get
  get latest() {
    return this.movements.slice(-1).pop()
  },
  // Any setter method accept exatly one parameter
  // It is not mandatory to specify a setter when we have a getter for the same property (Just a getter or a setter would be enough)
  set latest(mov) {
    this.movements.push(mov)
  },
}
// Use of Get
console.log(account.latest) // 300 // we simply use it as a propery but not calling it.
//! This can be very usefull when we want to read smth. as a property but still need to do calculation.
// Use of Set
// console.log(account.latest(50)) // Normal usage of method
account.latest = 50 // But it is now like a property, not a method
console.log(account.movements) // [200, 530, 120, 300, 50]

//? Use of getters and setters on Classes
//! Works exact same way.

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  greet2() {
    console.log(`Hello ${this.firstName}`)
  }
  get age() {
    return 2037 - this.birthYear
  }
}

const jessica = new PersonCl('Jessica', 1993)
console.log(jessica)
console.log(jessica.age) // 44

//!!! Setters and getters are actually very usefull for data validation...

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  greet2() {
    console.log(`Hello ${this.firstName}`)
  }
  get age() {
    return 2037 - this.birthYear
  }
  set fullName(name) {
    // We create a setter for the fullName property which will check if this is actually full name
    // Here it is important to understand is that we are creating a setter for a property name that does already exist (fullName). So what gonna happen is that each time code here is executed so whenever we set the fullName on the this keyword at the begining of the class, then actually method here (setter) gonna be executed. And so that name that we pass in as fullName will become the name (in the set method parameter) and we got a crazy error.
    // What happens is that there is a conflict. So right now both the setter function and constructor function are trying to set the exact same property name.
    // What we do is create a new property name and the convention for doing that when we have setter which is trying to set a property that does already exist then we add a underscore
    console.log(name)
    // if (name.includes(' ')) this.fullName = name
    // else alert(`${name} is not a full name`)
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name`)
    // Now we have _fullName but not fullName property.
    // To fix this we now also need to create a getter
  }
  get fullName() {
    return this._fullName
    // Now we have fullName
  }
}
//! Above class we expect a full name which contains space...
const jessicaFull = new PersonCl2('Jessica Davies', 1993)
//! Now we can create a setter for a fullName property which will check if this is actually a full name or not.

console.log(jessicaFull) // Now we have _fullName
