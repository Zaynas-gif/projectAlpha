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
//npm install connect-mongo will help u store cookies in to database(mongodb)
//Lets use express
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const app = express()

let sessionOptions = session({
    secret: "Javascript is so cool",
    store: new MongoStore({client: require('./db')}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})



app.use(sessionOptions)
//Calling express
//require function in node.js do 2 thinks one of them
//executes file but it also
//returns what ever thet file exports
const router = require('./router')
//Its just tells express to add users typed in data in our request object
//so that we can accses later
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//Tell express that css file are accessible.
app.use(express.static('public'))
//Use express to find home page and use install ejs before doing this
app.set('views' , 'views')
app.set('view engine', 'ejs')
//Lets tell our app what to do when it gets get request to the base url.
app.use('/', router)



module.exports = app
