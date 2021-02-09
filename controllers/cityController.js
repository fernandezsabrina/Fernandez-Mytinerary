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
                return res.json({ success: false, error})
            })
    },
    allCities: async (req, res) => {
        // Devuelvo al frontend la lista de ciudades
        const data = await City.find()
        res.json({
            respuesta: data
        })
    },

    singleCity: async (req, res) => {
        // devuelvo al frontend solo la ciudad seleccionada
        const id = req.params.id
        const registro = await City.findById(id)
        res.json({ success: true, respuesta: registro })

    }
}

module.exports = cityController
