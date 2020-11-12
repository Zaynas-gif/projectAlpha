const { response } = require("express")
// '../' you can move up your folder
const User = require('../models/User')


//When user types in correct information username and password values 
//1 server gonna store session data in memory
//2 session will send instructions to the webbrowser to create cookie.
exports.login = function(req, res) {
    let user = new User(req.body)
    user.login().then(function(result) {
      req.session.user = {favColor: "blue", username: user.data.username}
      req.session.save(function (){
          res.redirect('/')
      })
    }).catch(function(e) {
        req.flash('errors', e)
        req.session.save(function () {
            res.redirect('/')
        })
    })
  }

exports.logout = function (req, res) {
//So this gonna find the session that have been created 
//in MongoDB and will remove that
    req.session.destroy(function () {
        res.redirect('/')
    })
}


exports.register = function (req, res) {
let user = new User(req.body)
user.register()
if (user.errors.length) {
 res.send(user.errors)
}else {
 res.send("Congrats, there are no errors.")
}
}


//with session help server gonna be able to remmeber user
exports.home = function (req, res) {
    //if everything is right its gonna display username when you login
 if (req.session.user) {
    res.render('home-dashboard', {username: req.session.user.username})

 }else {
    res.render('home-guest', {errors: req.flash('errors')})
 }
}