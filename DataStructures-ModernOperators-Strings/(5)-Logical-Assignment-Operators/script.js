'use strict'
const rest1 = {
  name: 'Capri',
  numGuests: 0,
}
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}
// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10 // Primitive
//rest2.numGuests = rest2.numGuests || 10 // Primitive
// Logical OR operator do with same as above
//rest1.numGuests ||= 10
//rest2.numGuests ||= 10
//! But above code snippets have same problem when the numGuests equal to 0...
// Logical Nullish Assignment Operator
rest1.numGuests ??= 10
rest2.numGuests ??= 10

// && Operator
//rest1.owner = rest1.owner && 'ANONYMOUS' // Primitive
//rest2.owner = rest2.owner && 'ANONYMOUS' // Primitive

rest1.owner &&= 'ANONYMOUS' // Logical AND Operator
rest2.owner &&= 'ANONYMOUS' // Logical AND Operator
console.log(rest1)
console.log(rest2)
