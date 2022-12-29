'use strict'

//! There is third way of implementing prototypal inheritance or delegation -> function called Object.create which works in a different way than constructor functions and classes
//? There is still a idea of prototypal inheritance but there are no prototype properties and also no constructor functions and no new operator.
//? We use it to essentially manually set the property of an object to any other object that we want

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },
  init(firstName, birthYear) {
    // We create this function to simply add property to the object with a programmatical way. This function has no relation with constructor function or new operator.
    this.firstName = firstName
    this.birthYear = birthYear
  },
}
const steven = Object.create(PersonProto) // this will now return a brand new object that is linked to the prototype that we passed in
// steven here is right now an empty object and it will be linked to this PersonProto object which will be its prototype
console.log(steven)

// Quickly fix the property of steven
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()
console.log(steven.__proto__) // this is exactly PersonProto
console.log(steven.__proto__ === PersonProto) // true

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979)
sarah.calcAge()
