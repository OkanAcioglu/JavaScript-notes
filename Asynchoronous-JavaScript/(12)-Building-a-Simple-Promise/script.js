'use strict'

//? Until now we learn about consuming promises but but we never built a own promise

//! We create a promis using new Promise constructor
//! Promise are just like another type of object in JS
//! Promise constructor takes exactly one argument that is so called executer function
//! As soon as promise constructor runs, it will automatically execute this executer function
//! This executor function is the function which will contain the asynchronous behavior that we trying to handle with the promise. So this executer function should eventually produce a result value. Value that gonna be the future value of the promise
const lotteryPromise = new Promise(function (resolve, reject) {
  //if (Math.random() >= 0.5) {
  //resolve('You WIN💰')
  //! Where resolve function that was passed as an argument comes into play. In order to set promise fullfilled we use resolve() function. Calling the resolve function like this will mark this promise as a fullfilled promise

  //! Into the resolved function we pass the fullfilled value of the promise so that it can be later be consumed with then() method

  //! Whatever value we pass into the resolve() function is gonna be the result of the promise that will be available in the then() method
  //} else {
  //reject('You lost your money💩')
  //! Into the reject function we pass the error message that we later want to be able in the catch() method
  //}
  console.log('Lottery draw is happening...🔮')
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN💰')
    } else {
      //reject('You lost your money💩')
      //! Instead of a string we can create new Error object
      reject(new Error('You lost your money💩'))
    }
  }, 2000)
})
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err))

//! But this is not async. yet...
//! Let simulate it by adding simple timer...

//! Finally this is how we encapsulate any asynchronous behavior into a promise so how we abstracted away in a very nice way
//! All we have to do is consume promise like below...
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))
//! In practice most of the time all we do is consume promises and we usually only built promises to wrap old callback based functions into promises.
//! And this is a process that call promisifying...
//? promisifying means to convert callback based asynchoronous behavior to promised based.

//! Below what we gonna do is promisify the set timeout function and create a wait function.
//! Inside of the function we will create and return promise
//! Creating a function and then from there returning a promise and so this will then encapsulate the asynchronous operation even further. That is also what fetch function does

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    //! This case we do not need reject() because it is impossible for the timer to fail
    setTimeout(resolve, seconds * 1000)
    //! Here callback function we want to called after a certain time is exactly the resolve function and note that we do not pass any resolved value into the resolve function actually it is not mandatory
    //! So in case of timer it is also not necessary to wait for some value
    //! In this case all we want to do is to basically make our code wait
  })
}
//! Below we simply wait 2 seconds, after two seconds it will resolve and then we can handle that then here in code callback function will be empty because we do not expect any resolved value then we can run any code that we wanted to executed after two seconds
wait(10)
  .then(() => {
    console.log('I waited for 10 seconds')
    return wait(1) //! This is exactly what we did before when we wanted to chain two sequential AJAX calls using fetch. Therefore all of this returns a new promise
  })
  .then(() => console.log('I waited for 1 second'))
//! Above again we have a nice chain of asynchronous behavior happened nicely in a sequence

wait(1)
  .then(() => {
    console.log('1 Second Pass')
    return wait(1)
  })
  .then(() => {
    console.log('2 Seconds Pass')
    return wait(1)
  })
  .then(() => {
    console.log('3 Seconds Pass')
    return wait(1)
  })
  .then(() => {
    console.log('4 Seconds Pass')
    return wait(1)
  })
  .then(() => {
    console.log('5 Seconds Pass')
    return wait(1)
  })
  .then(() => console.log('6 Seconds Pass'))

//?? Another way of creating immediately fullfilled or rejected promise...

Promise.resolve('abc').then((x) => console.log(x)) //! This is a static method on promise constructor. We can simply pass the resolved value. This will resolved immediately...
Promise.reject(new Error('Problem!')).catch((x) => console.error(x))
//! Above two appear at the very beginning of the console after the "Lottery draw is happening..." because it is the first microtask that will happen first.
