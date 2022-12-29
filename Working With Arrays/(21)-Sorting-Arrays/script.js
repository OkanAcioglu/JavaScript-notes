'use strict'
//? sort Method
// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners.sort()) // ['Adam', 'Jonas', 'Martha', 'Zach'] // sorted as A-Z
console.log(owners) //! MUTUATE original array
// numbers
const example = [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(example)
//console.log(example.sort()) // [-130, -400, -650, 1300, 200, 3000, 450, 70]
//console.log(example)
//? Result array may seems to be weird but sort method sort the array according to the string. ("-" comes first and then according to 1,2,3... they are sorted)
//? This situation can be fixed with using callback function.
// Below sort method takes 2 argument first one is current value and second one is next value if we imagine sort method loop over the array.
// Below think a and b as a two consecutive numbers in array and it doesnt matter which ones. In our callback function if we return less than 0 then the value a will be sorted before value b. And the opposite, if we return a positive value then a will be put before b.
// return <0 a,b (keep order)
// return >0 b,a (switch order)
example.sort((a, b) => {
  // ascending
  if (a > b) {
    return 1
  }
  if (a < b) {
    return -1
  }
})
console.log(example)
// İmproved Ascending
const example3 = [200, 450, -400, 3000, -650, -130, 70, 1300]
example3.sort((a, b) => a - b)
console.log(example3)

const example2 = [200, 450, -400, 3000, -650, -130, 70, 1300]
example2.sort((a, b) => {
  // descending
  if (a > b) {
    return -1
  }
  if (a < b) {
    return 1
  }
})
console.log(example2)

// İmproved Descending
const example4 = [200, 450, -400, 3000, -650, -130, 70, 1300]
example4.sort((a, b) => b - a)
console.log(example4)

//! If we combine numbers and strings sort method will not be work...
//
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

//! İmplementing Sort
const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = ''
  // We took slice() in order to take copy because we do not want to change original data.
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function (mov, i) {
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
  e.preventDefault()
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  )

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

//! İmplementing Loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount)
    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})
//! Delete Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault()

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    )
    console.log(index)
    // Delete Account
    accounts.splice(index, 1)
    // Hide UI
    containerApp.style.opacity = 0
  }
  inputCloseUsername.value = inputClosePin.value = ''
})
//! Sort Event Listener

let sorted = false
btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  displayMovement(currentAccount.movements, !sorted)
  sorted = !sorted
})
