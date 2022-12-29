'use strict'

//! Below our AJAX calls running parallel and we did not control the which one finishes first
//! However lets create a sequence of AJAX calls so that second one runs only after first one is finished

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

//! First we will add the rendering functionality into a function
const renderCountry = function (data, className = '') {
  //! className="" added to activate for class that created for neighbour country
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

const getCountryAndNeighbour = function (country) {
  // AJAX Call Country 1
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v2/name/${country}`)
  request.send()

  request.addEventListener('load', function () {
    console.log(this.responseText)
    const [data] = JSON.parse(this.responseText)
    console.log(data)

    // Render Country 1
    renderCountry(data) //! Here we call the function that we create at the beginning

    // Get neighbour Country 2
    const neighbour = data.borders?.[0]
    if (!neighbour) return // in case of islands

    // AJAX Call Country 2
    const request2 = new XMLHttpRequest()
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
    request2.send()

    //! Here we add another addEventListener into the addEventListener means that adding callback function into callback function
    request2.addEventListener('load', function () {
      console.log(this.responseText)
      const data2 = JSON.parse(this.responseText) // no array so no re-structuring
      console.log(data2)
      renderCountry(data2, 'neighbour') //! Application of special class for neighbour
    })
  })
}

//getCountryAndNeighbour('portugal')
getCountryAndNeighbour('usa')

//! To sum up what we have is that one callback function inside another callback function in other words we have nested callbacks. Now if we have more request in sequence in this case we will end up with callback inside a callback inside a callback... and that kind of structure called callback hell.
//! Callback Hell is when we have a lot of nested callbacks in order to execute async tasks in sequence. This happens for all async tasks which are handled by callbacks and not just AJAX calls.

// Example of Callback Hell
setTimeout(() => {
  console.log('1 second passed...')
  setTimeout(() => {
    console.log('2 second passed...')
    setTimeout(() => {
      console.log('3 second passed...')
      setTimeout(() => {
        console.log('4 second passed...')
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

//! Callback hell easy to identify with the triangular shape
//! Problem with the callback hell is that makes our code messy but more importantly it makes our code hard to maintain and very difficult to understand. This means more bugs and hard to implement new features.
