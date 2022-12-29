// * Beside "if" statement and "switch" statement there is another "conditional statement"
// * Like "if-else" statement but all in one line.

const age = 23
// * "If" "condition" that stated "before question mark" is "true" then do the "after question mark"
// * Only one thing can be done after the question mark.
// * After the "colon"  there is a mandatory "else block"
age >= 18
  ? console.log('I like to drink wine🍷')
  : console.log('I like to drink water🥛')

// * "Conditional operator" is a "operator" and "operator" always produce "value" like "expression"
// * If we assign "value" that coming from the "conditional operator" will be more usefull than example above.
// * What normally more usefull and more common use of "conditional operator" :
const drink = age >= 18 ? 'wine🍷' : 'water🥛'
console.log(drink)

// * Since "Conditional operator" is an "expression" we can now use it in a "template literal"
console.log(`I like to drink ${age >= 18 ? 'wine🍷' : 'water🥛'}`)

//!----------------------APPLICATION-------------------------

const bill = 40
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
)
