// * "Expression" is a piece of code that produce "value"
3 + 4 // Produce Value
1991 // Produce Value
true && false && !false // Produce some boolean value

// * "Statement"  It performs some actions doesn't really produce a "value".
if (23 > 10) {
  const str = '23 is bigger' // "23 is bigger" is "expression" but whole line of code is "statement"
}

// !! "Expressions" produce "values" and "statements" are like full sentence that translate our actions.
// !! Basically, whenever something ends with a semicolon that is then a "statement".

// ?? These concepts are important because JS expect "expressions" and "statements" in different places.
