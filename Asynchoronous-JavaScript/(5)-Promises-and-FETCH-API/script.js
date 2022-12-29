'use strict'

//! With ES6 promises were introduce and this will help us to escape callback hell
//? Let first replace XMLHttpRequest function with the modern way of making AJAX calls that is by using fetch API

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

// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v2/name/${country}`)
// request.send()

const request = fetch('https://restcountries.com/v2/name/portugal')
//! There are some more options that we can specify in the fetch function but for simple get request all we need is pass the URL
console.log(request)
//! As soon as we started a request we stored the result of that into the request variable and then as we logged it we immediately got a Promise here and it says PENDING

//!!! LOOK AT THE LECTURE NOTES !....
