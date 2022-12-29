'use strict'

// * OOP is a programming paradigm based on the concept of objects.
// * We use objects to "model" (describe) real-world or abstract features.
// * Objects may contain data (properties) and code (methods).
// * By using objects, we pack "data and the corresponding behaviour" into one block.
// * In OOP,objects are "self-contained" pieces/block of code.
// * Objects are "building blocks" of applications and "interact" with each other.
// * Interactions happen through a "public interface" (API) : methods, that the code outside of the object can access and use to communicate with the object
// * OOP was developed with the goal of "organizing" code, to make it "more flexible and easier to maintain" (avoid spaghetti code)

//! Up until now we have basically only used objects as loose collections of data and without making them interact with each other.
//! Also we did not have a way to generate objects programmatically. All we ever did was using simple object literals, but in OOP, we actually need a way to generate objects from our code.
//! To do that traditional OOP, we use smth. called classes.
//? CLASS -> Like a blueprint from which we can create new objects.

// User {
//  user
//  password
// email
//  login(password){

// }
//  sendMessage(str){

// }
// }

// * Above is just a representation, NOT actual JS syntax class example written.
// * JS does not support real classes like represented above. It is works a bit differently in JS but it is still important to understand.

//! We call all objects created though a class "instances" of that class. Below is a example of instance and it is a real object that we can use in our code which was created from a class. And class itself is not an object.
// new User("okan")
//  {
//  user = "okan"
//  password = "asdasd"
// email = "example@gmail.com"
//  login(password){

// }
//  sendMessage(str){

// }
// }
//!!! Beauty of the class is that now we can use it to create as many instance as we want.

//? How do we actually design classes? How do we model real-world data into classes?
// * There are 4 fundamental principles of OOP:
//! Abstraction
//! Encapsulation
//! Inheritance
//! Polymorphism
// * These are techniques that can be used outside of the OOP.

//? Abstraction : Ignoring or hiding details that "doesnt matter", allowing us to get an "overview" perspective of the thing we're implementing, instead of messing with details that do not really matter to our implementation.
//! Think a mobile phone for a user to use. Without abstraction low level details like verify phone temperature and voltage etc. might be interact with user which is not necessarry. But in real phone all of these details are abstracted away from user. For example user only interact with volume button home button etc.
//! Think addEventListener function do we actually know how its works? No... Do we use it? Yes...

//? Encapsulation : Keeping properties and methods "private" inside the class, so they are "not accessible from outside the class". Some methods can be "exposed" as a public interface (API).
//! Below example is just a hypothetical because private keyword actually does not exist in JS.
//! Outside code now can not access these properties however inside the class they are still accessible.
// User {
//  user
// private password
// private email
//  login(word){
//   this.password === word
// }
// comment(text) {
//   this.checkSPAM(text)
// }
// private checkSPAM(text){
// Verify Logic
//  }
// }
//! By having these critical properties nicely encapsulated like this, prevents external code from accidentally manipulating internal properties/state.
//! Above term state simply refers to an objects data.
//! Above object there is also private method called checkSPAM. Again it is not accessible from outside a class, but used internally to check if a comment is spam or not.
//! So we want no one else outside the class to be able to use this method.(we dont make it public interface)
//! Making method private makes it easier for us to change our code without breaking code from the outside which might rely on some of these methods.

//? Inheritance : Making all properties and methods of a certain class "available to a child", forming a hierarchical relationship between classes. This allows us to "reuse common logic" and to model real-world relationships.
//! Lets say we have two classes below as User and Admin which stands for administrator.
// User {
//  user
//  password
// email
//  login(password){

// }
//  sendMessage(str){

// }
// }
//----------------//
// Admin {
//  user
//  password
// email
// permissions

//  login(password){
//Login Logic
// }
//  sendMessage(str){
// Sending Logic
// }
//   deleteUser(user){
// Deleting Logic
//  }
// }
//! As we can see they have actually alot in common.
//! Actually admin has all the methods and properties that user has.
//! It is logical if you think admin is also a user.
//! In OOP when we have two classes that are closely related like user and admin here we can have one class inherit from the other. So we will have one parent class which is user here and one child class which is admin here. Then we said child class extends the parent class.
//! Child class inherits all the properties and methods from its parent class.
//! Goal of the inheritance reuse logic that is common to both of the classes.
//! In above case both of the admin and user need to login and instead of writing that logic twice it makes sense to inherit the login method from the more global class which is the parent class (user) to the more specific class which is the child class (admin)
//! Child class also has its own methods and properties.

//? Polymorphism : A child class can "overwrite" a method it inherited from a parent class.
//! Think that we have user class as parent and two child classes as admin and author. Now think that admin and author inherit a login method from user class. Let say admin requires a different kind of login (more secure one) and let say we need a special login method for authors.
//! How do we give them different login methods? We simply in each class we write a new method, which is also called login and according to the polymorphism that login method will overwrite the login method that has been inherited.
