'use strict'

//! There 3 big and array methods that we use all the time to perform data transformations
//! There method are used to create new arrays based on transforming data from other arrays.

//? MAP
//* Similar to the forEach method but with a difference that map creates a brand new array.
//* MAP takes an array, loops over that and in each iteration it applies callback function to the current element.
//* forEach method allows us to the some work on each element of an array but in map method we do some work plus it gives us a array.
//? FILTER
//* Filter elements on the original array which satisfy a certain condition.
//* Only elements that pass the test that we specified will make it into the new filtered array. In other words elements for which the condition is true, will be included in the new array that will returns.
//? REDUCE
//* Boils ("reduce") all array element down to one single value (ex: adding all elements)
//* We have an "accumulator" variable, then as the reduce method loops over the array, it keeps adding the "current" element onto the accumulator until at the end of the loop.
//* There is no reduced array but reduced value.
