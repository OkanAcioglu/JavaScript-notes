const firstName = 'Okan'
const job = 'Student'
const birthYear = 1993
const year = 2037

const me =
  "I'm " + firstName + ', a ' + (year - birthYear) + " year's old " + job + '!'
console.log(me)

// * We can write "strings" more normal way with using "Templeta Literals"
// * For this use (``) (back ticks) , instead of ("") (double ticks)
// * Use ($) (dolar sign) and ({}) (curly bracket) for writing "expressions"
const newMe = `I'am ${firstName}, a ${year - birthYear} year's old ${job}!`
console.log(newMe)

// * (``) (back ticks) can be used for writing any "string"
console.log(`String with using back ticks!!!`)

// * Normally while writing multiple line strings (\n) was used.
// * But using "template literals" just go to the 1 line below.
console.log('String \n with\n multiple\n line')
console.log(`String
with
multiple
line`)
