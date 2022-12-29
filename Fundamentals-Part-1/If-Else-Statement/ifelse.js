// * "In paranthesis" in front of the "if", "condition" will be written. Here "condition" means "a boolean value". (either truthy of falsey)
// * If "condition" is "true" then "block" inside the "curly bracket" will be executed.
// * If "condition" in the "if" is "false" then "else block" will be executed.
// ! "else block" is optional...
// * With "if else statement" we can control the "blocks" that should executed or "blocks" that should not executed.
// if (condition) {
//       statement1
// }
// else {
//   statement2
// }

const age = 15
if (age >= 18) {
  console.log('Sarah can start driving license🚗')
} else {
  const yearsLeft = 18 - age
  console.log(
    `Sarah is too young. She should wait another ${yearsLeft} years !!!`
  )
}
// !! With "if else statement" we can control the "blocks" that should executed or "blocks" that should not executed.
//? if(){}else{} --> Called "Control Structre"

const birthYear = 1998
let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}
// !!! Above code we define "century" outside the "block" first.
// !!! For now "variable" that "declared" "inside of" any "code block" will "not be accessible" "out side of" the "block" but "variable" that "declared" "outside" of the "code block" can be reached by "code block".

// ??? "50 <= number <= 400" let number = 40 -> We cannot use this as a "condition" if we want to "target" the "number" that in between "50 and 400". This usage gives us result like below which is completely wrong:
// 50 <= number=40 -> false
// false <= 400
// 0 <= 400 -> true

// ??? if(day === "saturday" || "sunday") -> case like the left side, according to precedence table, "first" JS will check whether "day" "strictli equal" to the "saturday" or not. Then check the "OR" case between "sunday" and result that coming from the other check. Independant of the "day", result will always "true"
