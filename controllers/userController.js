const { response } = require("express")
// '../' you can move up your folder
const User = require('../models/User')
const Post = require('../models/Post')
const Follow = require('../models/Follow')

exports.sharedProfileData = async function(req, res, next) {
  let isVisitorsProfile = false
  let isFollowing = false
  if (req.session.user) {
    isVisitorsProfile = req.profileUser._id.equals(req.session.user._id)
    isFollowing = await Follow.isVisitorFollowing(req.profileUser._id, req.visitorId)
  }

  req.isVisitorsProfile = isVisitorsProfile
  req.isFollowing = isFollowing
  // retrieve post, follower, and following counts
  let postCountPromise = Post.countPostsByAuthor(req.profileUser._id)
  let followerCountPromise = Follow.countFollowersById(req.profileUser._id)
  let followingCountPromise = Follow.countFollowingById(req.profileUser._id)
  let [postCount, followerCount, followingCount] = await Promise.all([postCountPromise, followerCountPromise, followingCountPromise])

  req.postCount = postCount
  req.followerCount = followerCount
  req.followingCount = followingCount

  next()
}

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
        res.render('home-guest', {regErrors: req.flash('regErrors')})
      }
    }


    exports.ifUserExists = function(req, res, next) {
      User.findByUsername(req.params.username).then(function(userDocument) {
        req.profileUser = userDocument
        next()
      }).catch(function() {
        res.render("404")
      })
    }


    exports.profilePostsScreen = function(req, res) {
      // ask our post model for posts by a certain author id
      Post.findByAuthorId(req.profileUser._id).then(function(posts) {
        console.log(req.profileUser)
        res.render('profile', {
          currentPage: "posts",
          posts: posts,
          profileUsername: req.profileUser.username,
          profileAvatar: req.profileUser.avatar,
          isFollowing: req.isFollowing,
          isVisitorsProfile: req.isVisitorsProfile,
          counts: {postCount: req.postCount, followerCount: req.followerCount, followingCount: req.followingCount}
        })
      }).catch(function() {
        res.render("404")
      })
    
    }
    
    exports.profileFollowersScreen = async function(req, res) {
      try {
        let followers = await Follow.getFollowersById(req.profileUser._id)
        res.render('profile-followers', {
          currentPage: "followers",
          followers: followers,
          profileUsername: req.profileUser.username,
          profileAvatar: req.profileUser.avatar,
          isFollowing: req.isFollowing,
          isVisitorsProfile: req.isVisitorsProfile,
          counts: {postCount: req.postCount, followerCount: req.followerCount, followingCount: req.followingCount}
        })
      } catch {
        res.render("404")
      }
    }
    
    exports.profileFollowingScreen = async function(req, res) {
      try {
        let following = await Follow.getFollowingById(req.profileUser._id)
        res.render('profile-following', {
          currentPage: "following",
          following: following,
          profileUsername: req.profileUser.username,
          profileAvatar: req.profileUser.avatar,
          isFollowing: req.isFollowing,
          isVisitorsProfile: req.isVisitorsProfile,
          counts: {postCount: req.postCount, followerCount: req.followerCount, followingCount: req.followingCount}
        })
      } catch {
        res.render("404")
      }
    }