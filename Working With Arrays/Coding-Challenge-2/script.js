'use strict'

const ages = [5, 2, 4, 1, 15, 8, 3]
console.log(ages)
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
  const adultDogs = humanAges.filter((age) => age >= 18)
  const total = adultDogs.reduce((acc, age) => acc + age, 0)
  const average = total / adultDogs.length
  return average
}

console.log(calcAverageHumanAge(ages))
