//! NPM stands for Node Package Manager and it is both a software on our computer and package repository

//? Why we need NPM and why we need a way of managing packages or depedencies in our project?
//! Back in the day before NPM external libraries included right into the HTML using script tag. This would then expose a global variable that we could use.
//! But this creates couples of problems in huge projects.
//* First it doesnt make much sense having HTML loading all of JS
//* Also many times we would actually download a library file to our computer directly.But whenever new version came out we would have to manually go to the site download he new version change the file in our file system manually and then include it here again with some other name and other version number
//* Finally before NPM there wasnt a single repository that contained all the packages that we might need

//! So we really need a way to manage our dependicies in a better way. NPM will do that...
//
//! Go nodejs.org and download the nodeJS and download the LTS version
//! We start by checking whether NPM is installed or not from the terminal with typing "npm -v"
//! In each project we want to use NPM we need to start initializing it. So that we write the "npm init" in the console and this will ask some couple of question in order to create package.json. It will ask some question about define things like author keywords... but for now keep pressing enter.
//! Now we have package.json in our file. This file is basically what stores the entire configuration of our project
//! Now lets install leaflet library using NPM. For this go "https://leafletjs.com/download.html"
//! Here under the Using JavaScript package manager there is stated "npm install leaflet" and we will put this into terminal then it will start downloading
//! Now 2 things happened...
//* Firstly in our package.json file a new field called dependencies created
//* Secondly now we have folder called node modules and this folder itself contains the leaflet folder. This folder contains everythink about library
//! More package we install they will all get stored into the node module folder

//? If we wanted to use it that would not be easy without a module bundler. That is because this library actually uses the CommonJS module system. So we cannot directly import it into our code. We could only do that if later we used a module bundler

//! Instead of leaflet for now lets install and import one of the most popular JS libraries which is Lodash
//! Lodash is a collection of a ton of usefull functions for arrays,objects,functions,date and more...
//! Go https://lodash.com/ Down below there is Installation. There there is browser way, npm way but we are looking for special version because npm way need module bundler...
//! Below there is Module Formats and we write to terminal "npm i lodash-es"
//! Then we got dependencies
//! And we got one file for each of methods that are available in Lodash

//? Lets import one which is cloneDeep
//! Note that it is very hard to copy a nested object

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js'

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
}

//! Now let see what is going on when we copy it using JS
//! To copy the object we use Object.assign({},object that will copied)
//! Below case when we look at the stateClone it is also change to false
//! But if we use cloneDeep it will not change and still true
const stateDeepClone = cloneDeep(state)
console.log(stateDeepClone)

const stateClone = Object.assign({}, state)
console.log(stateClone)

state.user.loggedIn = false

//! Lets go back to the package.json file...
//! Lets say we want to move our project to another computer or share it someone else or even check it into version control like Git
//! In all of these scenarios we should Never ever include the node modules folder
//! To get it back all we do writing to terminal as "npm install" without any package name
//! Then NPM will reach into the package.json file look at all the dependencies and install them back
