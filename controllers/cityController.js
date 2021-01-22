// crear controladores que va a contener todo lo que tenga que ver con 

const City = require('../models/City')

const cityController = {
    addCity: (req, res) => {
        const cityAGrabar = new City({
            name: req.body.name,
            url: req.body.url
        })
        cityAGrabar.save()
            .then(cityAGrabar => {
                return res.json({ success: true, respuesta: cityAGrabar })
            })
            .catch(error => {
                return res.json({ success: false, error: error })
            })
    },
    allCities: async (req, res) => {
        // Devuelvo al frontend la lista de ciudades
        const data = await City.find()
        res.json({
            respuesta: data
        })
    },

    singleCity: (req, res) => {
        // devuelvo al frontend solo la ciudad seleccionada
        const id = parseInt(req.params.id)
        data.map(ciudad => {
            if (ciudad._id === id) {
                res.json({
                    respuesta: ciudad
                })
            }
        })

    }
}

module.exports = cityController
