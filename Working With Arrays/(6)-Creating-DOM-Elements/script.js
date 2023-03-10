'use strict'

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

//! We can simply start our code in the global context but it is always good to create a function...

// Instead of working with global variables, start passing the data that function needs actually into that function.
const displayMovement = function (movements) {
  // first think is emptying the container
  containerMovements.innerHTML = ''
  // Here innerHTML a little bit similar to the TextContent but difference is that text content simply returns the text itself while innerHTML return everythink, including the HTML tags.
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
   <div class="movements__row">
    <div class="movements__type 
    movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
   </div>
   `
    // Below method accept two strings. First is the position in which we want to attach the HTML.
    containerMovements.insertAdjacentHTML('afterbegin', html)
    // After adding these we still have the old ones. That is because all we are doing is to add new elements to this container, we are not over-riding anythink...
  })
}
displayMovement(account1.movements)

//! insertAdjacentHTML position(first input) options.
//  < !--beforebegin -->
//  <p>
//  <!-- afterbegin -->
//  foo
//  <!-- beforeend -->
//  </p>
//  <!-- afterend -->
//! insertAdjacentHTML text (second input) basically the string containing the HTML that we want to insert.
