'use strict'

const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}
// We generally want child class to have same functionality as the parent class but with some additional functionality
// Usually we pass in the same arguments with an additional ones
const Student = function (firstName, birthYear, course) {
  // Below two property are exactly same with the Person constructor function and we will want this situation firstly because it violating DRY code principle secondly if there is a change in parent class this will not reflected in the child class...
  // this.firstName = firstName
  // this.birthYear = birthYear
  //! Below we simply call Person function
  //Person(firstName, birthYear)
  // Above will not work because it is simple function call and we know that in simple function call this keyword is undefined. To fix this we simply use call method
  Person.call(this, firstName, birthYear)
  this.course = course
}
// It is important to relate two classes exactly here of the code. In other words we connect the classes before we add any more methods to the prototype object of student that is because Object.create will return an empty object. And so at here student.property is empty. And so then onto that empty object we can add methods like introduce below. If we did it other way then object.create would basically overwrite these methods that we had already added to the prototype object of student
Student.prototype = Object.create(Person.prototype)
// From now Student.prototype is now an object that inherits from Person.prototype
//! Why do we need Object.create?
//! Why we dont do like:
//Student.prototype = Person.prototype
//? If we do above we actually said student prototype property and person prototype property should be exact same object and this will violate the prototype chain

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `)
}
const mike = new Student('Mike', 2020, 'Computer Science')
console.log(mike)
mike.introduce()
mike.calcAge()

console.log(mike.__proto__)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student) //true
console.log(mike instanceof Person) //true
console.log(mike instanceof Object) //true
// All of above are in mike's prototype chain

// We need to fix
console.dir(Student.prototype.constructor) // Now JS think that constructor of student.prototype is Person reason for that we set the prototype property of the student using Object.create this makes it that the constructor of Student.prototype is still Person
Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)
