'use strict'

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]
// too much = current food > recommended
// too little = current food < recommended
// Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
// recommendedFood = weight ** 0.75 * 28

const recommendedFood = function () {
  dogs.forEach((cur) => (cur.weight = cur.weight * 2))
}
recommendedFood()
console.log(dogs)
