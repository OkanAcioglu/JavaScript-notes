'use strict'

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)

    return response.json()
  })
}

//! Now suppose we wanted to get some data about three countries at the same time but order that data coming is not a problem at all
//! We do 3 three Json calling and log capitals into the array
//! We did here is that run all these AJAX calls one after another eventhough result of the second one does not depend on the first one and result of the third one does not depends on the others
//! There is no need to wait of one AJAX call to other
//! We can actually run them in parallel so we can save valuable loading time
//! For this we use promise.all combinator function that is kind of a helper function on promise constructor. It is a static method
//! This function takes in an array of promises and it will return a new promise which will then run the all promises in the array at the same time
//! Now we can handle that promise in the exact same way as before

//! Note that if one of the promises rejects then whole promise.all actually rejects as well.

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`)
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`)
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`)
    // console.log([data1.capital, data2.capital, data3.capital])

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ])
    console.log(data.map((d) => d[0].capital))
  } catch (err) {
    console.log(err)
  }
}
get3Countries('portugal', 'canada', 'tanzania')
