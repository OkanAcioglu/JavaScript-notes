'use strict'

//?? GO END OF THE PAGE FOR LECTURE!!!!!!!!!

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

//!---------------------- LECTURE ------------------------

//! Until now, we create arrays manually
console.log([1, 2, 3, 4, 5, 6, 7])
console.log(new Array(1, 2, 3, 4, 5, 6, 7))
//! These are the data we already have and we can create array using this data.
//! However we can also generate arrays programmatically.
const x = new Array(7) // [empty × 7] // create array that contains 7 empty element
console.log(x) // also we cannot really use this x array for anything. for example we cannot use map method to fill it up.
//console.log(x.map(() => 5)) //[empty × 7] // nothing happen
//!!! method that we can call on the empty array is fill()
//! Note that it MUTUATE the array...
//! If there is three parameter first parameter indicates what will fill the array, second parameter indicates where to start filling the array and third parameter indicates where the filling is end...
//x.fill(1)
x.fill(1, 3, 5) // [empty × 3, 1, 1, empty × 2]
console.log(x)
//! fill method can be used on any array. Array do not have to be empty.
const arr = [1, 2, 3, 4, 5, 6, 7]
arr.fill(23, 4, 6)
console.log(arr) // [1, 2, 3, 4, 23, 23, 7]

//! What if we want to create arr array programmaticaly...
//! We can use Array.from() function.
//! Here we do not using from() as a method on array. Instead we are using on Array() constructor.
//! Firstly we assign a lenght and secondly a callback function.
const y = Array.from({ length: 7 }, () => 1)
console.log(y) // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1)
console.log(z)
// First parameter of the callback function simply throw away...

// Random 100 dice with using Array.from()
const b = Array.from(
  { length: 100 },
  (_, i) => (i = Math.trunc(Math.random() * 6 + 1))
)
console.log(b)

//? Array.from() function introduce first to JS in order to create arrays from array like structures. Iterables (strings,maps,sets) can be converted into real arrays using Array.from() function.
//? Another great example of array like structure is the result of using querySelectorAll()
//! Recall that querySelectorAll returns as smth. called NodeList which is smth. like array that contains all the selected elements. But it is not a real array and so it doesnt have methods like map() or others. If we wanted to use real array methods on that NodeList, we need to convert NodeList into the array. For that Array.from() is perfect.

//? Suppose we want a data from UI...
// We can create Event Listener on any element. It does not have to be button
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    (el) => Number(el.textContent.replace('€', ''))
  )
  console.log(movementsUI)
})
//! Above we used Array.from() to create an array from NodeList and as second step we even include a mapping function which then forms that initial array to an array exactly what we wanted.

//? Another way of converting querySelectorAll into array. But in this case we have to do mapping separately.
const movementsUI2 = [...document.querySelectorAll('.movements__value')]
