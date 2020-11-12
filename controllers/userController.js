const { response } = require("express")
// '../' you can move up your folder
const User = require('../models/User')

exports.mustBeLoggedIn = function(req, res, next) {
    if (req.session.user) {
        next()

    }else {
        req.flash("errors", "You must be logged in to perform that action.")
        req.session.save(function (){
            res.redirect('/')
        })

    }
}


//When user types in correct information username and password values 
//1 server gonna store session data in memory
//2 session will send instructions to the webbrowser to create cookie.
exports.login = function(req, res) {
    let user = new User(req.body)
    user.login().then(function(result) {
      req.session.user = {avatar: user.avatar, username: user.data.username, _id: user.data._id}
      req.session.save(function() {
        res.redirect('/')
      })
    }).catch(function(e) {
      req.flash('errors', e)
      req.session.save(function() {
        res.redirect('/')
      })
    })
  }


//So this gonna find the session that have been created 
//in MongoDB and will remove that
exports.logout = function(req, res) {
    req.session.destroy(function() {
      res.redirect('/')
    })
  }

  exports.register = function(req, res) {
    let user = new User(req.body)
    user.register().then(() => {
      req.session.user = {username: user.data.username, avatar: user.avatar, _id: user.data._id}
      req.session.save(function() {
        res.redirect('/')
      })
    }).catch((regErrors) => {
      regErrors.forEach(function(error) {
        req.flash('regErrors', error)
      })
      req.session.save(function() {
        res.redirect('/')
      })
    })
  }


//with session help server gonna be able to remmeber user
//if everything is right its gonna display username when you login
    exports.home = function (req, res) {
    if (req.session.user) {
        res.render('home-dashboard')
      } else {
        res.render('home-guest', {errors: req.flash('errors'), regErrors: req.flash('regErrors')})
      }
    }