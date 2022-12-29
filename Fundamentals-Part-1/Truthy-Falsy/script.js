// * "Falsy" "values" are "values" that are "not exactly false", but will be a "false" when we try to "convert" them into the "boolean"
// ! There is 5 falsy values:
//?   0
//?   ""
//?   undefinied
//?   null
//?   NaN
// ! Everything else are so-called "Truthy" "values"

console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false
console.log(Boolean('Jonas')) // true
console.log(Boolean('NaN')) // true
console.log(Boolean(34)) // true
console.log(Boolean([])) // true
console.log(Boolean({})) // true

// ! Keep in mind that "conversion" to "boolean" is always "implicit"
// ! It happens in two scenarios:
//?  When using "logical operators"
//?  When using "logical context" like "condition" in "if...else statement"

const money = 100
if (money) {
  console.log("Don't spent it all!")
} else {
  console.log('You should get a job!')
}

// ! Can be use for check if a "variable" actually "defined or not"
// ! If height is not "definied" it "converted" to "false" since "undefinied" is a "falsy" "value"
let height
if (height) {
  console.log('Height is definied!!!')
} else {
  console.log('Height is UNDEFINIED!!!')
}
// ! But in this logic there is a problem like if the "variable" definied with "0"
// ! This time "height" is "definied" but code run it as height is "undefinied" because "0" is "falsey" and JS "convert" it to the "false"
// ! This is kind of a "bug" however we can fix this using "logical operators"
let height1 = 0
if (height1) {
  console.log('Height is definied!!!')
} else {
  console.log('Height is UNDEFINIED!!!')
}
