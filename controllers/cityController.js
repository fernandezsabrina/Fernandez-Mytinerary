// crear controladores que va a contener todo lo que tenga que ver con 

const City = require('../models/City')

const data = [
    {
        name: "Tokyo",
        url: "https://images7.alphacoders.com/112/1125007.jpg",
        _id: 1
    },
    {
        name: "New York",
        url: "https://images.alphacoders.com/929/929018.jpg",
        _id: 2
    },
    {
        name: "London",
        url: "https://images7.alphacoders.com/942/942035.jpg",
        _id: 3
    },
    {
        name: "Dubai",
        url: "https://images.alphacoders.com/598/598614.jpg",
        _id: 4
    },
    {
        name: "Buenos Aires",
        url: "https://cdn.hipwallpaper.com/i/86/60/h2CafN.jpg",
        _id: 5
    },
    {
        name: "Barcelona",
        url: "https://images5.alphacoders.com/687/687053.jpg",
        _id: 6
    },
    {
        name: "Rome",
        url: "https://images8.alphacoders.com/462/462410.jpg",
        _id: 7
    },
    {
        name: "Paris",
        url: "https://images7.alphacoders.com/541/541800.jpg",
        _id: 8
    },
    {
        name: "Prague",
        url: "https://images7.alphacoders.com/487/487159.jpg",
        _id: 9
    },
    {
        name: "Venice",
        url: "https://images3.alphacoders.com/653/653603.jpg",
        _id: 10
    },
    {
        name: "Amsterdam",
        url: "https://images4.alphacoders.com/573/573386.jpg",
        _id: 11
    },
    {
        name: "Seoul",
        url: "https://images.pexels.com/photos/6435268/pexels-photo-6435268.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        _id: 12
    },
    {
        name: "Sydney",
        url: "https://images4.alphacoders.com/743/743533.jpg",
        _id: 13
    },
    {
        name: "Madrid",
        url: "https://images.alphacoders.com/721/thumb-1920-721616.jpg",
        _id: 14
    },
    {
        name: "Sao Paulo",
        url: "https://images.alphacoders.com/581/581842.jpg",
        _id: 15
    }
]

const cityController = {
    allCities: (req, res) => {
        // Devuelvo al frontend la lista de ciudades
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
