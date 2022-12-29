'use strict'

// * Truely applied class fields and methods
//! Private class fields and methods are actually part of a bigger proposal for improving and changing JS classes which is simply called Class Fields
//! In traditional OOP languages like Java and C++ properties are usually called fields. This means that with this new proposal JS is moving away from the idea that classes are just syntatic sugar over constructor function. Actually with this proposal actually start to have abilities that we previosly have with constructor functions.
//? In this proposal there are 4 kinds of fields and method: (There is also the 4 static versions)
//? 1. Public Fields
//? 2. Private Fields
//? 3. Public Methods
//? 4. Private Methods

//! We can think fields as a property that will be on all instance that why we call them public instance field
//! In the class below movements and locale are basically properties that is gonna be on all objects that we create with this class because we do not pass any values in
class Account {
  // We need to put semicolon at the end which is weird
  // Also locale looks like a variable but we do not have to declare it using like const or let
  // Below simply how we define public field

  //! 1.Public fields (instances) (not on prototype)
  // locale = navigator.language
  // At the end account will worked exactly the same, we still have _movements but now they are actually public fields
  // Public fields are gonna be present on all instances that we are creating through the class so they are not on the prototype

  //! 2.Private fields (instance) (not on prototype)
  // finally we can create a property that really not accesible from the outside
  // remove the underscore and use #
  #movements = []
  // other candidate of private field is pin
  // But for pin situation is a it different because now we setting the pin based on the input value to the constructor however we cannot define a field in the constructor so the fields really needs to be out here
  // So we simply create a private field here and do not set it to anything
  #pin

  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    // Protected Property
    this.#pin = pin
    //this._movements = []
    console.log(`Thanks for opening an account ${owner}`)
  }
  // 3.Public Methods

  // Public Interface
  getMovements() {
    return this.#movements
  }
  deposit(val) {
    this.#movements.push(val)
  }

  withdrawal(val) {
    this.deposit(-val)
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }
  // Static public method
  static helper() {
    console.log('Helper')
  }

  // 4.Private Methods
  // Google Chrome see this as a private class field and not as a method
  #approveLoan(val) {
    return true
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111)
console.log(acc1)

acc1.deposit(250)
acc1.withdrawal(140)
acc1.requestLoan(1000)
// acc1._approveLoan(1000) // protected

console.log(acc1.getMovements()) // we can still get the movements

//console.log(acc1.#movements) // no longer accessible from outside
//console.log(acc1.#pin) // no longer accessible from outside
Account.helper() // static public method
