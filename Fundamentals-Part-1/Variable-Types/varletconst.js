// --------------------------Variable-Types--------------------------------------

// * "Variable" declare by using one of the "let" , "var" or "const"
// * When we use "let" as a "variable type" we can "mutuate" it.
// * When we use "const" it can not be "mutuable"

let age = 31
age = 35

const birthYear = 1993
// birthYear = 1990 //! We cannot do that (Error Occur)

// const job; //! We cannot create a "variable" without "value" when using "const"

// ! For "clean coding" it is advice to use "const" because it decrease to ability to make mistakes.

// ! We should always avoid using "var" when we define "variable" Why? It is because "let" is "block scoped" and "var" is "function scoped" that will deeply learned later on.

// ! When we define "variable" without using any "var" , "let" or "const" but it is terrible idea because this doesn't create a "variable" in "scope" instead JS create a property on the "global object". So always use one of "var" , "let" or "const" when declare a "variable".
