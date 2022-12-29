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

const displayMovement = function (movements) {
  containerMovements.innerHTML = ''

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
   <div class="movements__row">
    <div class="movements__type 
    movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
   </div>
   `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

//! Computing In Out Interest
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => {
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0)
  labelSumInterest.textContent = `${interest}€`
}

//! Computing Balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance}€ `
}

//! Computing Usernames
//* Usernames for each of the account is simply initials.

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('')
  })
}
createUserName(accounts)

const updateUI = function (acc) {
  // Display Movements
  displayMovement(acc.movements)
  // Display balance
  calcDisplayBalance(acc)
  // Display summary
  calcDisplaySummary(acc)
}

//! Implementing Login
let currentAccount
btnLogin.addEventListener('click', function (e) {
  //console.log('LOGIN') // When we click the button so for a flash there, we saw the login and then page is reloaded. That is because this is the button in a form element. And so the HTML, the default behaviour, when we click submit button, is for the page to reload. We need to stop that from happening and for that we need to give this function the event parameter(e), on that parameter we call preventDefault(). And so the name says, this will prevent this form from submitting.
  e.preventDefault() // Prevent form from submitting
  //? Good think about form is that whenever we have input fields, when we input smth. and when we hit enter, that automatically trigger a click event on the button.

  //! to log user actually in we need to find account from the accounts array.
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  )
  // variable(currentAccount) needs to be defined outside because we will need that information about the current account also later in other functions.

  //! Check the pin is correct or not.
  // with optional chaining if only the current account exist then pin property only be ret.
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`
    containerApp.style.opacity = 100
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur()

    //Update UI
    updateUI(currentAccount)
  }
})
//! Implementing Transfers

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiveAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = ''
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount)
    receiveAcc.movements.push(amount)

    // Update UI
    updateUI(currentAccount)
  }
})
