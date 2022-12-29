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

// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request)

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     })
//     .then(function (data) {
//       console.log(data)
//       renderCountry(data[0])
//     })
// }
// getCountryData('portugal')

//! Before using then() promises is still in pending state because async task of getting the data is still running in the background
//! And at some point promise will be settled and either in fullfilled or in a rejected state
//! For now lets assume fullfilled...
//! To handle this fullfilled state we can use then() method that is available all promises
//! İnto the then() method we need to pass a callback function that we want to executed as soon as promise actually fullfilled
//! This callback function will recieve one argument and that is response. Response is in fact a resolved value
//! Onces it called by JS, that argument is resulting value of the fullfilled promises
//! Data is in the response body... When we click it, it says ReadableStream. For now we can not look at the data yet
//! To read the data from the body we need to call the json() method on the response
//! json() is a method that available on the all responses of the fetch method
//! Problem here json() function itself is a async function means also return a new promise
//! This is a bit confusing but it is what it is. It is implemented like this
//! Now we need to handle this new promise as well. So we call another then() here
//! Now we have our data with using promise

//-- SIMPLIFIED VERSION --
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]))
}
getCountryData('portugal')
