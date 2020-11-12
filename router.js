
const express = require('express')
//our const variable and look inside express package
//it displays mini aplication 
const router = express.Router()
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')

//Lets use our route variable to get request
//and what we want to send back when some1 sens request to our page
//User related routes
router.get('/' , userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

//post related routes

router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen)

module.exports = router