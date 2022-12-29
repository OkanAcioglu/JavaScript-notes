'use strict'
// !!! We can have repeated variable name is different scopes because they will completely different variable...
// !!! That is why we can have a functions with same parameter names because each parameter is only defined in that scope of that function...
function calcAge(birthYear) {
  const age = 2037 - birthYear

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      // Creating NEW variable with the same name as outer scope
      const firstName = 'Steven' // JS first look up the current scope.

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!'

      const str = `Oh, and you are a millenial ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }
    }
    // console.log(str) // Error const is block scoped
    console.log(millenial) // Because (var) is function scoped, they ignore block.
    //add(2, 3) // Error, functions are block scoped
    //console.log(add(2, 3)) // if we disable strict mode this will come as 5
    console.log(output) // output is changed
  }
  printAge()
  return age
}
const firstName = 'Jonas'
calcAge(1991)
// console.log(age) // Error
// printAge() // Error
