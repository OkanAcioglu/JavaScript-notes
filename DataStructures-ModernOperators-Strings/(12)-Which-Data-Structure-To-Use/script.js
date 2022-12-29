'use strict'
//? Source of Data
//! 1- From program itself: Data written in source code (ex: status message)
//! 2- From the UI: Data input from the user or data written in DOM (ex: tasks in todo app)
//! 3- From external sources: Data fetched from example from web API (ex: recipe objects)

// * Simple List --> Array or Set
// * Key-Value Pairs --> Object or Maps
//? Difference is with a key value pair we have a way of describing the values, so by using key.

// * In modern JS applications API's are most common source of data.
// * Data coming from API's usually coming in a special data format called JSON
// * JSON is esentially just text so a long string, but it can easily be converted into JS objects.
// * Creating an array of objects really common in JS.

//! Note that there are also Weakset and WeakMap which are other built-in data structures and Stack , Queue , Linked List , Tree and Hash table which are non built-in in JS.

// * Use Arrays
//? When need ordered list of values
//? When need to manipulate data
// * Use Sets
//? When need to work unique values
//? When high performance is really important
//? When need to remove duplicates
// * Use Objects
//? Easier to write and access
//? More traditional
//? Use when you need functions(methods)
//? Use when working with JSON (can be converted into map)
// * Use Maps
//? Better Performance
//? Keys can have any data
//? Easy to Iterate
//? Easy to compute size
//? Use when you simply need to map key to values
//? Use when you need keys that are not strings
