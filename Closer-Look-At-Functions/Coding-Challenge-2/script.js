'use strict'
//
//
;(function () {
  const header = document.querySelector('h1')
  header.style.color = 'red'

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  })
})()

//! When we click the body, color of the text of the h1 turns red to blue. How the callback function inside of the addEventListener can access to the header element? Answer is closure.
