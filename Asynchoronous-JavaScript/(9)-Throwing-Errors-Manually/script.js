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
  //countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  //countriesContainer.style.opacity = 1
}

//! We now create a function to handle the JSON because it is really the repetation of code.
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

    return response.json()
  })
}

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       (response) => {
//         console.log(response) //! ok: property set to false and status: property show 404
//         //! normally ok: property should set to true and status: property should be 200
//         //? Now we can use the fact that response has the ok: property set to false to basically reject the promise our selves manually. We can do it by creating a new error.
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`)
//         //! Above we create a new error then we pass in a message. Then we use the throw keyword which will immediately terminate current function like return. With creating error like this promise will immediately rejected. Then rejection will propagate all the way down to the catch handler. Message in the catch function is message that we create above.
//         return response.json()
//       }
//       //(err) => alert(err)
//     )
//     .then((data) => {
//       renderCountry(data[0])
//       const neighbour = data[0].borders?.[0]
//       if (!neighbour) return
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//     })
//     .then(
//       (response) => {
//         if (!response.ok)
//           throw new Error(`Country not found (${response.status})`)
//         //! Here we use same error in case of there is a problem with the second fetch.
//         response.json()
//       }
//       //(err) => alert(err)
//     )
//     .then((data) => renderCountry(data, 'neighbour'))
//     .catch((err) => {
//       console.error(`${err}💣💣💣`)
//       renderError(`Something went wrong ${err.message}. Try Again!`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1
//     })
// }

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0])
      console.log(data)
      const neighbour = data[0].borders?.[0]
      console.log(neighbour) // undefined
      //! Last think is handling no neighbour case...
      //! Here if there is no neighbour code do nothing...
      //! Here we throw a new error here
      if (!neighbour) throw new Error('No Neighbour found')
      // Country 2
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.error(`${err}💣💣💣`)
      renderError(`Something went wrong ${err.message}. Try Again!`)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1
    })
}

btn.addEventListener('click', function () {
  getCountryData('australia')
})

//getCountryData('sdfsdfsd') //! What is the problem here during fetch there 404 error. Because API could not find a country that name but fetch function still not reject this

//! Handling with error is waste of time??
//? Handling these errors is the only way in which we can actually display an error message like this.
//? Also it is bad practice to leave this rejected promises hanging around without handling them.
