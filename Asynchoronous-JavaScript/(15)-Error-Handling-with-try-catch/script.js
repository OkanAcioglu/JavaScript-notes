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

//! In async await we cannot use catch() method that we use before because there is no place to attach it.
//! Instead we use smth. that try...catch statement
//! Try...catch statement actually not only for async await but also used in JS since at the beginning
//! We simply wrap our code into try block then JS try to execute it just as normal
//! After we add the catch block which will have access to whatever error occured in the try block
//? Simple Example
// try {
//   let y = 1
//   const x = 5
//   x = 3 // Error made on purpose
// } catch (err) {
//   alert(err.message)
// }

//! Now let wrap below code into try block and add catch() after that
//! Now catch can access whatever error occur in the try block
//! Note that 404 error comes from country not found and 403 error comes from the too many request to reverse geocoding API
//! At this point we can do some error handling but this error is not really meaningfull at the beginning because fetch promise does not rejected on a 404 error but from 403 error, which was actually the original error, which caused everythink collapse
//! For the first promise we do not need to throw an error manually because in case that something goes wrong with the geolocation, we already built our promise so that it automatically rejects in that case
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition()
    const { latitude: lat, longitude: lng } = pos.coords

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[569952073246134873604x95126]`
    )
    //! Immediately after fetch lets create a manually error so that real reason of the error truely rendered
    if (!resGeo.ok) throw new Error('Problem getting location data...')
    const dataGeo = await resGeo.json()
    console.log(dataGeo)

    // Country Data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    )
    if (!response.ok) throw new Error('Problem getting country...')
    console.log(response)
    const data = await response.json()
    console.log(data)
    renderCountry(data[0])
  } catch (err) {
    console.error(`...${err}...`)
    renderError(`Something went wrong... ${err.message}...`)
  }
}
whereAmI()
