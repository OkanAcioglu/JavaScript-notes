'use strict'

//! Up until now we assume that everythink gonna be fine.
//! But it is common that errors happen
//! Recall that promises in which error happens is a rejected promise
//! Only way  in which the fetch promises rejects is when uses loses internet connection
//! When the internet is shutdown in the browser under the connection we took an error as Failed to fetch
//! This is the first time the promise that is returned from the fetch function was rejected
//? There are three ways of handling rejections...
// * First one is pass a second callback function into the then() method
// * Second one is adding catch() end of the chain
// * Third one is finally() method

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
  //countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  //countriesContainer.style.opacity = 1
}

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      (response) => response.json()
      //(err) => alert(err) // This is the second callback function that we write to handle the error and we took the error in the alert and error that we took from the console is gone because we catch the error right here.
      // Handling the error also called catching the error.
    )
    .then((data) => {
      renderCountry(data[0])
      const neighbour = data[0].borders?.[0]
      if (!neighbour) return
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(
      (response) => response.json()
      //(err) => alert(err) // Handle the error also here...
    )
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.error(`${err}💣💣💣`)
      renderError(`Something went wrong ${err.message}. Try Again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1
    }) // no matter if the promise fullfilled or rejected this callback function that we define is gonna be always called. Use for smth. that always need to be happen no matter result of the promise
  // One good example of this is to hide a loading spinner like rotating circles that we see everywhere. This spinner comes when async operations starts and hide when operation ends.
  // countriesContainer.style.opacity = 1 we need to this action in both fullfilled or error case it is good to add it to the finally() method.
  // Note that finally() method will work because catch() method return promise.

  //! instead of adding second callback function at each then() method we can add a catch() method at the end of the chain. catch() method here catch any error occur in the chain no matter where it is
  //! In real case logging error to the console is not enough, let also display an error message for the user to see with creating a function

  //! Note that error generated above is a real JS object. We can create errors in JS with a constructor. Any error created that way contains the message property. So when we want to see only the message instead of whole object we can use this property as used above (err.message)
}
btn.addEventListener('click', function () {
  getCountryData('portugal')
})
