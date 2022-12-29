'use strict'

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

    return response.json()
  })
}

//! there are other 3 types of promise combinators

//? Promise.race
//! Receives an array of promises and it also returns a promise
//! Promise returned by Promise.race is settled as soon as one of the input promises settles.
//* Settles means value is available but it doesnt matter if the promise got rejected or fullfilled
//! First settled promise wins the race
//! Promise gets rejected can also settled and we can say whenever one of the promise gets settled,
//! Promise.race will short-circuit no matter if one of the promise will fullfilled or rejected
;(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/turkey`),
  ])
  console.log(res[0])
})()

//! Promise.race very usefull to prevent against never ending promises or very long running promises
const timeOut = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'))
    }, sec * 1000)
  })
}
//! Now AJAX call race with this timeout
//! If the timeout happens first then all of the calls rejected
Promise.race([getJSON(`https://restcountries.com/v2/name/egypt`), timeOut(1)])
  .then((res) => console.log(res))
  .catch((err) => console.error(err))

//!!! Promise.race and Promise.all by far the most used Promise Combinators...

//? Promise.allSettled
//! It takes array of promises and return an array of all the settled promises not matter if the promises got rejected or fullfilled
//! Never short-circuits
Promise.allSettled([
  Promise.resolve('Success!'),
  Promise.resolve('Another Success!'),
  Promise.reject('Rejected!!!'),
]).then((res) => console.log(res))

//? Promise.any
//! Takes in an array of multiple promises and then returned first fullfilled promise by ignoring the rejected promises
//! Promise.any always gonna be the fullfilled promise unless all of them rejected.

Promise.any([
  Promise.resolve('Success!'),
  Promise.resolve('Another Success!'),
  Promise.reject('Rejected!!!'),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

//     return response.json()
//   })
// }
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ])
//     console.log(data.map((d) => d[0].capital))
//   } catch (err) {
//     console.log(err)
//   }
// }
// get3Countries('portugal', 'canada', 'tanzania')
