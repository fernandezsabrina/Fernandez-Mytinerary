const Joi = require('joi')

const validator = {
    validNewUser: (req, res, next) => {
        
        const schema = Joi.object({
            username: Joi.string().trim().alphanum().required(),
            password:Joi.string().trim().alphanum().required().pattern(/^[a-zA-Z0-9]{6,20}$/),
            name:Joi.string().trim().alphanum().required(),
            lastname:Joi.string().trim().alphanum().required(),
            country:Joi.string().trim().required(),
            urlpic:Joi.string().trim().uri().required(),
            email:Joi.string().trim().required().email({tlds: {allow: false}})
        })

        const validation = schema.validate(req.body, {abortEarly: false})

        if (!validation.error) {
            next()
        } else {
            res.json({success: false, errores: ['Error']})
        }
    },

    validNewCity: (req, res, next) => {
        const schema = Joi.object({
            name:Joi.string().trim().alphanum().required(),
            url:Joi.string().trim().uri().required()
        })

        const validation = schema.validate(req.body, {abortEarly: false})

        if (!validation.error) {
            next()
        } else {
            res.json({success: false, errores: ['Error']})
        }
    }
}

module.exports = validator