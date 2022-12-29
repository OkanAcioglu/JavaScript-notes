//! --------------- EXECUTION CONTEXT ------------
// * Suppose code is just finished compiling and ready to be executed.
// * What happens then is that a so-called "GLOBAL EXECUTION CONTEXT" is created for the "TOP LEVEL CODE"
// * "Top level code" is code that is not inside any function.
// * In the beginning only the code outside of the functions will be executed.
// * But what is "Execution Context" --> Environment in which a piece of JS code is executed. Stores all the necessary information for some code to be executed.
// * JS always runs inside an execution context.
// * Exatly ONE global execution context: default context,created for code that is not inside any function (top-level)
// * When execution of top-level code inside the global execution-context finished (execution done by computer CPU), functions finally start to execute as well.
// * For each and every function call a new execution context is created containing all the information that is necessary to run the function.(Same is for methods since they are simply functions)
// * All of the execution context together make up the call-stuck.
// * When execution of all function done, engine keeps waiting for call-back function to arrive so that it can execute these and as we knwo event-loop is the one that provides these new call-back functions.
//! -------------- INSIDE OF EXECUTION CONTEXT -------------
// VARIABLE ENVIRONMENT
// * In this environment all our variables, function declarations and also a special argumets object are stored.
// SCOPE CHAIN
// * Function can also access variables outside of the function and this works because of smth.called "scope chain"
// * Scope Chain basically consists of references to variables that are located outsıde of the current function.
