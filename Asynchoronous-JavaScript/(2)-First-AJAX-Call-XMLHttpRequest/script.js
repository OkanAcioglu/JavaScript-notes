'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

//! There is many ways to doing AJAX call but we will start with old-school one

// * 2 reason to learn this old-way:
//! 1) Knowing that XML HTTP request exists
//! 2) How AJAX calls used to be handled with events and callback functions

//? That is called XML HTTP request function
const getCountryData = function (country) {
  const request = new XMLHttpRequest() // first step use XMLHttpRequest and store it into the variable

  //! On GitHub, there is huge repository called Public APIs and there is list of a ton of public and free APIs that we can use.

  //! In the top the table there is authentication HTTPS and CORS. And here CORS is important. Any API we want to use should always have CORS set to YES or maybe to UNKNOWN. CORS stands for Cross Origin Resource Sharing and without CORS, we cannot access a third party API from our own code

  //! When we click to REST COUNTRIES API this will send us to documentation page. Here we looking API ENDPOINT. So the ENDPOINT is essentially just another name for the URL that we need. If we wanted to get list of all countries we could make an AJAX call to this URL but we want search the the API by country name so will use the URL that below the NAME.

  //! https://restcountries.com/v2/name/{name}

  //request.open('GET', 'https://restcountries.com/v2/name/portugal') // Type of HTTP request to get data simply GET , string containing URL to which the AJAX call should be made
  request.open('GET', `https://restcountries.com/v2/name/${country}`) // After putting it into the function we will no more hard code the name instead we will take it from the function input

  request.send() // Next step we need to send it. That request fetches the data in the background once that is done it will emit the load event using event listener below we are waiting for that event and as soon as the data arrives, callback function in the addEventListener will be called

  //! Now cannot store this in a variable because result is not yet there. This AJAX call that we just send off here is being done at the background while rest of the code keeps running. This is the async non-blocking behaviour

  //! We need to do is register a callback on the request object for the load event.

  request.addEventListener('load', function () {
    console.log(this.responseText) // here this keyword points to the request. We can also use request itself.
    // responseText property only be set once the data has actually arrived
    //! We need to convert the data to a real JS object because now data is in JSON format.
    //const data = JSON.parse(this.responseText) // Array with one object
    //console.log(data)
    const [data] = JSON.parse(this.responseText)
    console.log(data) // de-structure the data // same as doing this -- > const data = JSON.parse(this.responseText)[0] but more beautiful that that.

    //! Using data we will add them to the HTML
    const html = `<article class="country">
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
  })
}
//! At the end we will put all the code into a function...

getCountryData('portugal')
getCountryData('usa')
//! By calling two functions above we will have two AJAX call happening at the same time. When we reload the page order of the countries my change. Reason for that is data arrives slightly different time each time that we loading the page. This show non-blocking action.
