'use strict'

//! Recall that encapsulation means to keep some properties and methods private inside the class
//? Two Reasons for encapsulation and data privacy
// * 1. Prevent code from outside of a class to accidentally manipulate
// * 2. When we expose only a small interface so a small API consisting only a few public methods then we can change all the other internal methods with more confidence

//!!! Here we will use fake encapsulation...
// * We will cover the movements...
// * For this firstly we add a underscore in front of it.
//!!! It is just a convention. Still movements can be accessible from outside but underscore implies the team and other developers that movements actually a protected property and should not be changed from the outside.
//? If we still wanted to give a access to the movements array from the outside then we would have to implement a public method for that
//? We use getMovements() but we can also create a real getter there
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    // Protected Property
    this._pin = pin
    this._movements = []
    console.log(`Thanks for opening an account ${owner}`)
  }
  // Public Interface
  getMovements() {
    return this._movements
  }
  deposit(val) {
    this._movements.push(val)
  }

  withdrawal(val) {
    this.deposit(-val)
  }

  _approveLoan(val) {
    return true
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111)

//acc1._movements.push(250) // With underscore developer will understand that movements is protected.
//acc1._movements.push(-140) // With underscore developer will understand that movements is protected.

acc1.deposit(250)
acc1.withdrawal(140)
console.log(acc1)

acc1.requestLoan(1000)
// acc1._approveLoan(1000) // protected

console.log(acc1.getMovements()) // correct way to get movements... Everybody still can access the movements but they cannot override it...
