// * Alternative way of writing complicated "if/else statement" with compare to multiple different options basically.
// * There maybe some situations that "switch" statement cannot catch that "if/else" statement can catch so it is up to situation.
// * "Strict equality" is used for comparing "expressions"
// !!! "Switch statement" evaluates an "expression", matching the "expression's value" against a series of "case clauses", and "executes statements" after the "first case clause" with a "matching value", until a "break statement" is encountered.
// !!! The "default clause" of a switch statement will be jumped to if "no case matches" the "expression's value".
// !!! "Default clause" is optional and a "swicth statement" can have only "one" "default clause"
//? SYNTAX
// switch (expression) {
//   case value1:
//     Statements executed when the
//     result of expression matches value1
//     [break;]
//   case value2:
//     Statements executed when the
//     result of expression matches value2
//     [break;]
//      ...
//    [default:
//     Statements executed when none of
//     the values match the value of the expression
//     [break;]]
// }

const day = 'Wednesday'
switch (day) {
  case 'Monday': // gün === "monday"
    console.log('Course Planning')
    console.log('Morning Meeting')
    break
  case 'Tuesday':
    console.log('Go to the GYM')
    break
  case 'Wednesday':
  case 'Thursday':
    console.log('Cooking')
    break
  case 'Friday':
    console.log('Rest')
    break
  case 'Saturday':
  case 'Sunday':
    console.log('Enjoy the Weekend')
    break
  default:
    console.group('Not a valid day')
}
//? Equal "if/else statement"
if (day === 'Monday') {
  console.log('Course Planning')
  console.log('Morning Meeting')
} else if (day === 'Tuesday') {
  console.log('Go to the GYM')
} else if (day === 'Wednesday' || day === 'Thursday') {
  console.log('Cooking')
} else if (day === 'Friday') {
  console.log('Rest')
} else if (day === 'Satuday' || day === 'Sunday') {
  onsole.log('Enjoy the Weekend')
} else {
  console.group('Not a valid day')
}

//? Fall-through
// * If "break" is omitted, execution will proceed to the next "case clause", even to the "default clause", "regardless of" whether the "value of that clause matches". This behavior is called "fall-through".

const x = 0
switch (x) {
  case -1:
    console.log('negative 1')
    break
  case 0:
    console.log(0)
  case 1:
    console.log(1)
    break
  case 2:
    console.log(2)
    break
  default:
    console.log('default')
}

//? If "no match" is found, "execution" will "start from the default clause", and "execute" "all statements" "after that".
//? If there is "break" after that, no "execution" occur.

const y = 5
switch (y) {
  case 2:
    console.log(2)
    break
  default:
    console.log('default')
  case 1:
    console.log('1')
    break
  case 0:
    console.log('0')
}
