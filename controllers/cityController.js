const City = require('../models/City')

const cityController = {
    addCity: async (req, res) => {
        var errores = []
        const { name, url } = req.body
        const cityExists = await City.findOne({ name: name })
        if (cityExists) {
            errores.push('City already exists')
        }
        const cityAGrabar = new City({
            name: req.body.name,
            url: req.body.url
        })
        cityAGrabar.save()
            .then(cityAGrabar => {
                return res.json({ success: true, respuesta: cityAGrabar })
            })
            .catch(errores => {
                return res.json({ success: false, errores})
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
