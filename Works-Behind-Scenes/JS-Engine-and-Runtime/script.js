// !!! ------------- JS ENGINE------------
// * What is "JS Engine?"
// * Program that EXECUTES Javascript code.
// * Every "browser" have it own "JS Engine"
// * Most well-known engine is "Google's V-Eight" powers "Google Chrome" and "Node.js"
// !!! Any "JS Engine" contains "CALL STACK" and "HEAP"
// !!! "CALL STACK" is where our code is "EXECUTED" using "EXECUTION CONTEXT"
// !!! "HEAP" is an "unstructured memory pool" whick stores all the object that our application needs.
// * What is diffrence between "Compilaton" and "Interpretation"??
// ? "Compilaton" -> "Entire code" is converted into "machine code" "at once", and written to a binary file that can be "executed"(Can happen "way after" compilation) by a computer.
// ? "Interpretation" -> Interpreter "runs" through the "source code" and "executes" it "line by line" (Code still needs to be converted to machine code.).
// !!! "JS" is "purely interpreted language" but problem is that its "much much slower" than "compiled languages". --> NOW IT IS NOT THE CASE...
// !!! "Modern JS engine" use a mix between "Compilaton" and "Interpretation" which is called "JUST-IN-TIME (JIT)" compilation that is "entire code" is "converted" into "machine code" at ones, then "executed" "immediately". It is still like a "compilation" but there is "no portable file" to "execute".
// * When a piece of code enters the "JS engine" first step is "TO PARSE THE CODE" means "read the code". During "parsing process", the code is "parsed" into a "data structure" called the "abstract syntax tree (AST)". This works by first "splitting up each line of code" into "pieces" that are "meaningful" to the "language" like "const" or "function" then "save" all these pieces into "tree". Also "syntax check" done at "this stage". Then saved tree is used to generate the "machine code".
// * Next step is "compilcation" which takes the "generated AST" and "compiles" it into the "machine code". This machine code "executed" "right away" and this happens in the "call-stack".
// * "Modern JS Engines" have clever "optimization" that they create a very "unoptimized" version of the "machine code" so that they can start "executing" "as fast as possible" then in the "background" this code "still optimized and recomplied" "during" the "already running program execution".
// * After each "optimization" , "unoptimized code" simply "swept" for the "new optimized" code.
// * These all are happens in "special threads" that we "can not access" from the code and "completely separate" from the "main thread" that is "running" in the "call-stack" "executing our own code".
// !!! ---------JS RUNTIME--------
// * Runtime in the browser --> Imagine "JS Runtime" as a big box which includes all the things that we need in order to use JS in this case in the browser.
// ENGINE
// * HEART of any JS Runtime is always a JS Engine.
// * Without engine there is no runtime and there is no JS at all
// APIs
// * However engine alone is not enough. In order to work properly we also need access to the "WEB APIs" that is everythink related to the DOM, timers even console.log that we use all the time. So essentially "WEB APIs" are functionalities provided to the engine but which are not part of the JS language itself.
// * JS simply gets access to these APIs through the "Global Window Object"
// CALLBACK QUEUE
// * "Call queue" is a "data structure" that contains all the "callback functions" that are ready to be executed.
// * For example we attach event handler functions to DOM elements like a button to react to certain events. These event handler functions are also called callback functions. As the event happens for example "click", the callback function will be called. First thing that actually happens after the event is that callback function is put into the callback queue. Then when the stack is empty, callback function is passed to the stack. So it can be executed. And this happens by smth. called "Event Loop".
