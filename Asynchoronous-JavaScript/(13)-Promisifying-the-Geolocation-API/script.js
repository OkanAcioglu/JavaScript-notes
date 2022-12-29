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

//! getCurrentPosition() accepts two callbacks first one is accepts first one is success and second one is error...
//! So the first callback function gets access to the position object
//! At some point JS figures out the location then we get data back.
//! This is actually async. behaviour that code is not blocked
//! Below code clearly callback based API so we passed in different callbacks
//! This is an great oppurtunity to promisifying a callback based API to a promise based API
//!
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.error(err)
)
console.log('Getting Location') //! This will logged first // Now we ensure that above code is async.

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //navigator.geolocation.getCurrentPosition(
    //(position) => resolve(position), //! When we are success, we want to resolve() the promise (want to marked as a fullfilled) and we call the resolve() function and we pass in that position object because that is actually fullfilled value that we want to get from this promise in case that is succesfull. This is the whole reason why we use getPosition() function in the first place. It is to get access to the current position and that is in the position object and so that is what we are gonna pass into the resolve
    //(err) => reject(err)
    //? We can do it even simpler because if getCurrentPosition() function automatically calls (position) => resolve(position) and (err) => reject(err) functions and if it also automatically passes in the position and err then we can simply do below instead of above which are exactly same...
    //)
    navigator.geolocation.getCurrentPosition(resolve, reject) //! Before we specified the callback manually, but all we want to take position and pass it then into resolve() but here it happens automatically. Now resolve() itself is a callback function which will get called with the position.
  })
}

getPosition().then((pos) => console.log(pos)) // We promisified the geolocation API to a promised base API now...

//! Now we use this as our advantages and modify our whereAmI function to take data from API according to our current coordinate...

//! Now as long as we have the getPosition() function which will say us where we are we do not need to use lat and lng anymore...

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords
      //! Here we simply de-structure the object now we need to chain it with the next promise
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[569952073246134873604x95126]`
      )
    })

    //fetch(
    //  `https://geocode.xyz/${lat},${lng}?geoit=json&auth=[569952073246134873604x95126]`
    //)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`)
      return res.json()
    })
    .then((data) => {
      console.log(data)
      console.log(`You are in ${data.city}, ${data.country}`)
      return fetch(`https://restcountries.com/v2/name/${data.country}`)
    })
    .then((response) => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`)
      return response.json()
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}`))
}

btn.addEventListener('click', whereAmI)
