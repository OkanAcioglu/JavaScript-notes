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
  countriesContainer.style.opacity = 1
}

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

//! To understand better what is going on with the async function lets add some console.log at the end...
//! Now we want to return some data in async function and lets add at the end we want to return a string
//! Let think whereAmI as a normal function and store it into the variable
//! When we console log that variable we saw that a pending promise and remember that at the beginning of the async/await we stated that async function always returns a promise
//! This is because JS has no idea knowing yet a string we want, function is still running but it is also not blocking the code
//! Value that returned from a async function will become the fullfilled value of the promise that is returned by the function
//! Fortunately we know how to get data from there simply using then() function
//! When we think about the error, if any error occurs in the try block then return value will never be reached because code immediately jump to the catch block
//! Now lets on purposely create an error in the country data fetch function
//! So nothing was returned from the function and we get undefined. What interesting here is that console.log still worked this means that callback function is still running means that then() method was called and this means promise was fullfilled.
//! So eventhough there was an error in the async function promise that the async function returns is still fullfilled and not rejected.
//! In fact if we add a catch() at the end we still get the error and still callback function from then() method still executed.
//! What that means eventhough we got an error in the async function the promise that it returns is still fullfilled
//! If we wanted to fix that we have rethrow that error in the catch block. Rethrow the error means throw the error again so that we can propagate it down. So that we can manually reject a promise that is returned from the async function
//! Finally fixing the fact that console.log printed before the whereAmI and to fix this we can use finally()
//! One more problem is that we kinda fixes the philosophy of async/await since we use catch() and finally() and we mix the old and new generation.
//! There is a proposal for that but for now but for now await can be only used inside an async function
//! However we do not want a complete new function here instead we can use IIFE.

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition()
    const { latitude: lat, longitude: lng } = pos.coords

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[351979730886798240111x87075]`
    )
    if (!resGeo.ok) throw new Error('Problem getting location data...')
    const dataGeo = await resGeo.json()

    // Country Data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    )
    if (!response.ok) throw new Error('Problem getting country...')
    const data = await response.json()
    renderCountry(data[0])

    return `You are in ${dataGeo.city}, ${dataGeo.country}`
  } catch (err) {
    console.error(`...${err}...`)
    renderError(`Something went wrong... ${err.message}...`)

    // Reject promise returned from async function
    throw err
  }
}
// console.log('1: Will get location')
// const city = whereAmI()
// console.log(city)
// console.log('3: Finished getting location')

// console.log('1: Will get location')
// whereAmI()
//   .then((city) => console.log(`2: **${city}**`))
//   .catch((err) => console.error(`2: **${err.message}**`))
//   .finally(() => console.log('3: Finished getting location'))

console.log('1: Will get location')
;(async function () {
  try {
    const city = await whereAmI()
    console.log(`2: ${city}`)
  } catch (err) {
    console.error(`2: **${err.message}**`)
  }
  console.log('3: Finished getting location')
})()
