'use strict'

const dogsJulia = [3, 5, 2, 12, 7]
const dogsKate = [4, 1, 15, 8, 3]

const checkDogs = function (arr1, arr2) {
  const correctedDogsJulia = arr1.slice(1, dogsJulia.length - 1)

  const allDogs = [...correctedDogsJulia, ...arr2]
  allDogs.forEach(function (value, index) {
    if (value >= 3) {
      console.log(`Dog number${index + 1} is an adult`)
    } else {
      console.log(`Dog number${index + 1} is still a puppy`)
    }
  })
}
checkDogs(dogsJulia, dogsKate)
