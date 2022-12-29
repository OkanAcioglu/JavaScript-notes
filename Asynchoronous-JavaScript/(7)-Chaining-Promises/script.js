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
//! In the AJAX call we already have small chaining with the then() method but now lets do a chaining AJAX calls
//! Here again second call will depend on the first call and need to be done in sequence
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0])
      const neighbour = data[0].borders?.[0]
      if (!neighbour) return
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, 'neighbour'))
}
getCountryData('portugal')

//! Here instead of callback hell we have flat chain of promises and eventhough there is neighbour of neighbour of neighbour... now we can easily do that with chaining...

//! Also keep in mind that always return the promise and then handle it outside by simply continuing the chain

//! Keep in mind that then() method always returns a promise no matter if we actually return anything or not but if we do return a value then that value will be the fullfillment value of the return promise
const getCountryData2 = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      return 23 // Whatever we return this promise here will become the fullfilled value of the promise
    })
    .then((data) => alert(data))
}
getCountryData2('portugal')
