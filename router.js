
const express = require('express')
//our const variable and look inside express package
//it displays mini aplication 
const router = express.Router()
const userController = require('./controllers/userController')

//Lets use our route variable to get request
//and what we want to send back when some1 sens request to our page
router.get('/' , userController.home)

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

module.exports = router