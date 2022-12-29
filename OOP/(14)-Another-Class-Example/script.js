'use strict'

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this.pin = pin
    this.movements = [] // we can create even more properties on any instance and properties that are not based on any inputs

    // Moreover here we can execute any code that we want
    console.log(`Thanks for opening an account ${owner}`)
  }
  //! Below two methods are the interface to our objects we called this API
  //! Below methods are PUBLIC INTERFACE of our objects
  deposit(val) {
    this.movements.push(val)
  }
  //! Below "minus" sign can be categoriazed as a small abstraction because user will not care the minus sign as it is already withdrawal
  withdrawal(val) {
    this.deposit(-val) // we can also call other methods inside a certain method with using this keyword of course
  }
  //! Below two methods we want only the requestLoan to be in the public interface
  approveLoan(val) {
    return true
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111)
console.log(acc1)

// acc1.movements.push(250)
// acc1.movements.push(-140)
// console.log(acc1.movements)
//! We can do above but it is lot better to create methods
acc1.deposit(250)
acc1.withdrawal(140)
console.log(acc1)

//! Having these methods does not make it impossible to still do the interacting the movements like below
// acc1.movements.push(250)
// acc1.movements.push(-140)
//! Same goes for the pin... We can access the pin outside of the account but it should not be accessible from outside of the class
//! This is same for methods...
acc1.requestLoan(1000) // We want do this
acc1.approveLoan(1000) // This method will not be doing anythink here but we do not want to accessible from outside the object
