
const express = require('express')
//our const variable and look inside express package
//it displays mini aplication 
const router = express.Router()

//Lets use our route variable to get request
//and what we want to send back when some1 sens request to our page
router.get('/' , function (req, res) {
res.render('home-guest')
})



module.exports = router