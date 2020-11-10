// Fast tip insted of saving and closing server everytime u can isntall pacage nodemon wich can 
//help you save automaticly
//to install it run code npm isntall nodemon
// go to package.json in script line
// add new custom script
// like "watch": "nodemon <server>"
//tip 2. how to share code from one file to another?
//we adding const router = require('./router') to app.js 
//in router.js console.log("I am executed immediately.")
//module.exports = "I am the export for the router file"
//when server starts we able to see message in console.
//so what we wrote in router.js file
//module.exports = ... gonna store it in variable and
// we gonna be able to use it that wheen ever we want.

//Lets use express
const express = require('express')
//Calling express
const app = express()
//require function in node.js do 2 thinks one of them
//executes file but it also
//returns what ever thet file exports
const router = require('./router')
console.log(router)

//Tell express that css file are accessible.
app.use(express.static('public'))
//Use express to find home page and use install ejs before doing this
app.set('views' , 'views')
app.set('view engine', 'ejs')
//Lets tell our app what to do when it gets get request to the base url.
app.use('/', router)

//Lets tell to our app to begins listening incoming request

app.listen(3000)
