//!------------------------ HIGH LEVEL -------------------------
// * Every "program" that "run" in our computer needs "resources" such as "memory" and "CPU" to do its work.
// * There are "low level languages" such as "C" where we have to "manage resources" "manually" for example "asking the memory to create a new variable".
// * On the other hand "High Level Languages" such as "JS and Python" that developer "do not need to worry", "every think happen automatically". These languages have so-called "abstractions" that "take all of the work away from us".
// * "High Level Languages" "easy to" "use" and "learn" but "never" "as fast" and "as optimized" as "Low Level Languages".

//!-------------------- GARBAGE COLLECTED -----------------
// * One of the "tools" that takes "memory management" away from us is "garbage collection" which is basically an "algoritm" inside the "JS Engine" which "automatically" removes "old and unusued objects" from the "computer memory".

//!-------------------- INTERPRETED or JUST-IN-TIME COMPLIED -----------------
// * "Computer processor" only understand "1" and "0".
// * We write a "human-understandable codes" and this codes are "abstraction" over "machine code" which contains only "1" and "0"
// * "Human-understandable code" needs to be "translated" to "machine code". This step is either "compiling" or "interpreting"
// * For "JS" this done by "JS Engine"
//!-------------------- MULTI PARADIGM -----------------
// * In programing "paradigm" is a "approach" and "overall mindset" of "structuring our code" which will ultimately the "coding style and technique".
// * There is "3" "popular paradigm" -->
// ? Procedural programming --> What we doing so far.
// ? Object-oriented-programming
// ? Functional programming
//! JS does all!!!
// * Paradigm also classify as "imperative" and "declerative".
//!-------------------- PROTOTYPE BASED OBJECT-ORIENTED -----------------
// * In "JS" everythink is "object" except "primitives"
// * How can we create an "Array" and use the "push" method on it? Because of "prototypical inheritance". Basically we create "arrays" from an "array blueprint" which is like a "template" and this called "prototype". This "prototype" contains all the "array methods". Then "arrays" that we create "inheriate" that "methods" and we can use them.
//!-------------------- FIRST-CLASS FUNCTIONS -----------------
// * "Functions" treated as "regular variables" so we can "pass" "function" to another "function" and can even "return function" from a "function".
// * This allows us "functional programming"
//!-------------------- DYNAMIC -----------------
// * "Dynamic" means "dynamically types". We do not assign "data-types" to "variables". Instead they only became known when "JS Engine" "executed" our code.
// * Also "variables" can easily be changed
//! --------------- SINGLE-THREADED AND NON-BLOCKING EVENT LOOP ---------
// * What is "concurrency model?" Just a "fancy term" that means "how" the "JS engine" handles "multiple tasks" "happening at the same time".
// * Why do we need that? Because "JS" itself runs in "one single-thread", which means we can do "only one" thing "at a time" and therefore we need a way of "handling multiple things" happening "at the same time".
// * "Thread" is like a "set of instructions" that is "executed" in the computers CPU. So "thread" is where our code is actually executed in a machine's processor.
// * What about "long runing" tasks like "FETCHING data" from a remote server? Sounds like it would "block" "single thread", however, we want "non-blocking behavior".
// * This is done by using "event-loop": takes "long running tasks", "executes" them in the "background" and puts them "back" in the "main thread" once there are "finished".
