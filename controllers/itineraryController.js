const Itinerary = require('../models/Itinerary')

const itineraryController = {
    addItinerary: (req, res) => {
        const { title, likes, duration, price, hashtag, userName, userPic, idCity, activities, comments } = req.body

        const itineraryAGrabar = new Itinerary({
            title,
            likes,
            duration,
            price,
            hashtag,
            userName,
            userPic,
            idCity,
            activities,
            comments
        })

        itineraryAGrabar.save()
            .then(itineraryAGrabar => {
                return res.json({ success: true, respuesta: itineraryAGrabar })
            })
            .catch(error => {
                return res.json({ success: false, error: error })
            })
    },
    
    allItineraries: async (req, res) => {
        const data = await Itinerary.find()
        res.json({
            respuesta: data
        })
    }
}

module.exports = itineraryController