const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    lastname: String,
    email: String,
    urlpic: {type: String, default: "https://lh3.googleusercontent.com/proxy/miXVt9h07BzTUA0AFJAHIesgaXP5NH3QwPgTMfqwnbicoilk5P5mKlZTguROCnhHKY_ugu4TiLYqZ7Jxoy33qv44PqLTETpWDX6d3cyJZOEumLbGdK8M8WggP_4"},
    country: { type: String, default: "Canada" }
})

const User = mongoose.model('user', userSchema)

module.exports = User