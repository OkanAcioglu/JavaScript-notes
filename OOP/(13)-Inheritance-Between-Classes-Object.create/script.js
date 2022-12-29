'use strict'

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },
  init(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  },
}
const steven = Object.create(PersonProto)

//! We basically add antoher prototype in the middle of the chain (Between PersonProto and the object)

const StudentProto = Object.create(PersonProto)
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course
}
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `)
}

const jay = Object.create(StudentProto) // Now StudentProto object that we just created early is now the prototype off the jay object
// Therefore PersonProto is parent prototype of jay
jay.init('Jay', 2010, 'Computer Science')
jay.introduce()
jay.calcAge()
