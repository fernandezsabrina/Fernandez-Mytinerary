const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    lastname: String,
    email: String,
    urlpic: String,
    country: { type: String, default: "Canada" }
})

const User = mongoose.model('user', userSchema)

module.exports = User