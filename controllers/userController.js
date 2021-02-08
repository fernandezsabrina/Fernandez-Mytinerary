const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userController = {
    signUp: async (req, res) => {
        var errores = []
        const { username, name, lastname, password, country, urlpic, email } = req.body
        const userExists = await User.findOne({ username: username })
        const mailExists = await User.findOne({ email: email })
        if (userExists || mailExists) {
            errores.push('Username or email is already in use')
        }
        if (errores.length === 0) {
            const passwordHasheado = bcryptjs.hashSync(password, 10)

            var newUser = new User({
                username,
                name,
                lastname,
                password: passwordHasheado,
                country,
                urlpic,
                email
            })
            var newUserSaved = await newUser.save()

        }
        
        return res.json({
            success: errores.length === 0 ? true : false,
            errores: errores,
            response: newUserSaved
        })

    },

    logIn: async (req, res) => {
        const { username, password } = req.body
        
        const userExists = await User.findOne({ username: username })
        if (!userExists) {
            return res.json({ success: false, mensaje: 'Username or password is invalid' })
        }
        const passwordMatches = bcryptjs.compareSync(password, userExists.password)
        if (!passwordMatches) {
            return res.json({ success: false, mensaje: 'Username or password is invalid' })
        }

        return res.json({ success: true, response: userExists })
    }
}

module.exports = userController