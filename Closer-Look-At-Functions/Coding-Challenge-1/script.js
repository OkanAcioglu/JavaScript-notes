'use strict'
// Coding Challenge 1
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(200))

// Rewrite of above function using function returning another function
const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate
  }
}
const addVAT2 = addTax2(0.23)
console.log(addVAT2(200))

// Coding Challenge 2
const poll = {
  question: 'What is your favourite programming language',
  options: ['0:Javascript', '1:Python', '2:Rust', '3: C++'],
  // This generates [0,0,0,0].
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${
          (this, this.options.join('\n'))
        }\n(Write Option Number)`
      )
    )
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++
    this.displayResults()
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`)
    }
  },
}
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, 'string') // This works because in displayResults function looking for this.answers. But our array is simply out. We need a way to make this.answers equal to this array. We use call method and we could manually set the this keyword to a new object which as the answers property has that new array.
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })
// [5,2,3]
// [1,5,3,9,6,1]
