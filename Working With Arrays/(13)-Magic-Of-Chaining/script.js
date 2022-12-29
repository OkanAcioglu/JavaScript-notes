'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1
const totalDepositsUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUsd)

//! As long as result of an method is an array we can increase the number of method of the chain
//! Note that reduce return as value so we could not do that.
//! If there is problem in the chain it is hard to find bug. Like this situations third input parameter of the methods which is array itself may be used.

//??? We should not overuse chaining, we should try to optimize it because chaining tons of methods one after another can cause real performance issues if we have really huge arrays.
//??? It is bad practice in JS to chain methods that mutuate the underlying orijinal array and example of that is splice method. We should not chain method like splice or the reverse method.
