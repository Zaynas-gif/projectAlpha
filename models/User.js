const bcrypt = require("bcryptjs")
const usersCollection = require('../db').db().collection("users")
const validator = require("validator")
let User = function (data) {
//creating a property to store eveyrthing in to object to use it later
this.data = data
this.errors = []

}
//npm install validator download package for alot of validation for your webpage
//
User.prototype.cleanUp = function () {
    if(typeof(this.data.username) != "string") {this.data.username = ""}
    if(typeof(this.data.email) != "string") {this.data.email = ""}
    if(typeof(this.data.password) != "string") {this.data.password = ""}

    //get rid of any bogus(fake) properties
    //trim() will romove any empty spaces and value
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password

    }
}
User.prototype.validate = function () {
 if (this.data.username == "") {this.errors.push("You must provide a username")}
 if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers.")}
 if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email adress")}
 if (this.data.password == "") {this.errors.push("You must provide a password")}
 if (this.data.password.length > 0 && this.data.password.length < 12) {this.errors.push("Password must be at least 12 characters.")}
 if (this.data.password.length > 50) {this.errors.push("Password cannot exceed 50 characters.")}
 if (this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters.")}
 if (this.data.username.length > 30) {this.errors.push("Username cannot exceed 30 characters.")}
}

User.prototype.login = function () {
 //cleanup makes sure that this is string text   
    return new Promise( (resolve, reject) => {
        this.cleanUp()
        // so here we gonna tell mongo to find user(document)if mongo finds the user info its gonna pass it to attemptedUser in this parameter.
            usersCollection.findOne({username: this.data.username}).then((attemptedUser) => {
                if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
                    resolve("Congrats!")
        
                }else {
                    reject("Invalid username / password")
        
                }
            } ).catch(function () {
                reject("Please try again later.")
            })
    })
}
//adding blueprints to objects
User.prototype.register = function () {
//step 1 : Validate user data¨
this.cleanUp()
this.validate()


//step 2 only if there are no  validation errors
//then save the user data into a database
//code will run if there is no validation errors
if (!this.errors.length) {
    //Hash user password
    let salt = bcrypt.genSaltSync(10)
    this.data.password = bcrypt.hashSync(this.data.password, salt)
    usersCollection.insertOne(this.data)
}

}
 module.exports = User