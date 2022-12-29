'use strict'

//? "Classical OOP" : Classes
//? Class -> Instantiation -> Instance
//? Objects (instance) are instantiated from a class, which functions like a blueprint

//! "OOP in JS" : Prototypes
//! Prototype <- Object
//! Objects are "linked" to a prototype object
//! Prototypal inheritance : The prototype contains methods (behaviour) that are "accessible to all objects to that prototype"
//! Behaviour is "delegated" to the linked prototype object

// * Array.prototype.map() : Here Array.prototype is the "prototype" of all array objects we create in JS. Therefore, all arrays have access to the map method. In a sense our array inherits the map method. Or in other words we can also say that the array delegated the behaviour of mapping to its prototype. Here what matters is that the map() method is actually not defined on the array itself but on its prototype.

//? How do we actually create prototypes?
//? How do we link objects to prototypes?
//? How can we creates new objects, without having classes?
// * In JS there three different techniques to doing all of this:
//! 1. Constructor function
//? Technique to create objects from a function
//? This is how built-in objects like Arrays,Maps or Sets are actually implemented.
//! 2. ES6 Classes
//? Modern alternative to constructor function syntax
//? "Syntactic sugar" : behind the scenes, ES6 classes works exactly like constructor functions
//? ES6 classes do not behave like classes in "classical OOP"
//! 3. Object.create()
//? The easiest and most straightforward way of linking an object to a prototype object
