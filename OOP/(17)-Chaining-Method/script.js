'use strict'

class Account {
  #movements = []
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
    return this
  }

  withdrawal(val) {
    this.deposit(-val)
    return this
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
      return this
    }
  }
  // Static public method
  static helper() {
    console.log('Helper')
  }

  // 4.Private Methods
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

//! Recall that we can chain the array methods and we can actually implement same ability of chaning methods of our class
//! Only return the object itself at the end of the method that we want to be chainable

// acc1
//   .deposit(300)
//   .deposit(500)
//   .withdrawal(35)
//   .requestLoan(25000)
//   .withdrawal(4000)
//! Above code get an error because simply for example for method which is deposit did not return anything so it will comes as undefined.
//? To fix this we can need to return object itself
//? So end of methods return this will be added

acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000)
console.log(acc1.getMovements())
