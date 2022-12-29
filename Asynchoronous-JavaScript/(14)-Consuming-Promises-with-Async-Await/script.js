'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  //countriesContainer.style.opacity = 1
}

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

//! Lets look at again consuming promises because ES2017 release even better and easier way to consume promises async/await...

//! We start with creating special type of function called "async" with adding async keyword before the function.
//! Now this function is "async function" that will basically "keep running" in the "background" while performing the code that is inside of it
//! When function is done it will automatically "returns a promise"
//! Inside the async function we can have "one or more await statements" and after that we need a "promise" and as a promise we used "promise" that will come from the fetch(). We use "await keyword" for "await for the result of this promise"
//! Await "stops" the code execution at this point of the function until the promise is fullfilled
//! Above stopping code execution will not make a problem because function is running in the background async way. So it is not blocking the main threat. So it is makes our code look like a regular synchronous code while behind the scenes everythink is in async.
//! As soon as promise in the function resolved, value of the whole await expression that we have gonna be the resolved value of promise so we can store it in a variable.
//! This time we got our response in an elegant way
//! Now we need to get the JSON from response so we called json() on the response
//! Recall that after json() we got another promise so again we will use await and store it into the variable

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition()
  const { latitude: lat, longitude: lng } = pos.coords

  // Reverse Geocoding
  const resGeo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[569952073246134873604x95126]`
  ) //! We do not need to chain anything, we do not need to chain anything, we do not need to create callback functions...
  const dataGeo = await resGeo.json()
  console.log(dataGeo)

  // Country Data
  const response = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  )
  console.log(response)
  const data = await response.json()
  console.log(data)
  renderCountry(data[0])

  //This is exactly same
  // fetch(`https://restcountries.com/v2/name/${country}`).then((res) =>
  //   console.log(res)
  // )
}
whereAmI()
console.log('FIRST') // This will log first and we can understand that whereAmI function is async.

//! Keep in mind that async/await is syntactic sugar over the then() method in promises. Behind the scenes we still use promises...
