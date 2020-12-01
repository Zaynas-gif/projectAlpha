
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

//profile related routes
router.get('/profile/:username', userController.ifUserExists, userController.profilePostsScreen)

//post related routes
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen)
router.post('/create-post', userController.mustBeLoggedIn, postController.create)
router.get('/post/:id', postController.viewSingle)
router.get('/post/:id/edit',userController.mustBeLoggedIn, postController.viewEditScreen)
router.post('/post/:id/edit',userController.mustBeLoggedIn, postController.edit)
router.post('/post/:id/delete',userController.mustBeLoggedIn, postController.delete)
router.post('/search', postController.search)

module.exports = router