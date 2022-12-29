'use strict'
//Primitive Types
let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'
console.log(lastName, oldLastName) // Davis Williams
// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before Marriage:', jessica)
console.log('After Marriage:', marriedJessica)
//! There is no new object in the heap...

//! We can easily change the property of the object although we declared it with using const because what actually needs to be constant is value in the stack and for object in the stack, value only holds the reference which we are not changing. Only think we are changing is the underlying object that is stored in the heap. That has nothing to do with const or let...

//! What we cant do is changing marriedJessica...
//marriedJessica = {} // We cant do that...
//! Because this new object will be stored at a different position in memory, therefore the reference to that position in memory will have to change here in this variable. That in the stack and so since it is a constant, we cannot change...
//! If it is let we can do it...

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
}
//! With using Object.assign() we can create a new object...
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'
console.log(jessicaCopy, jessica2)
//! There is problem with this copying technique that is only works on the first level. In other words if we have an object inside the object then this inner object will actually still be the same.
//! That is why we said this method creates a shallow copy... Not a deep clone...

const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
}
const jessicaCopy2 = Object.assign({}, jessica3)
jessicaCopy2.lastName = 'Davis'
jessicaCopy2.family.push('Steven') // Manipulate object inside the object
console.log(jessicaCopy2)
console.log(jessica3)
// Both object inside the object same...
