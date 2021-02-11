const Itinerary = require('../models/Itinerary')
const User = require('../models/User')

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
        const data = await Itinerary.find({ idCity: req.params.id })
            .populate({
                path: 'comments',
                populate: {
                    path: 'userID',
                    model: 'user'
                }
            })
        res.json({
            respuesta: data
        })
    },

    addComment: async (req, res) => {
        const { idIt, idUser, comment } = req.body
        const comentario = await Itinerary.findOneAndUpdate({ _id: idIt }, { $push: { 'comments': { userID: idUser, comment: comment } } }, { new: true })
        res.json({ success: true, respuesta: comentario })

    },

    modifyComment: (req, res) => {

    },

    deleteComment: (req, res) => {

    },

    getComment: async (req, res) => {
        id = req.query.idIt
        
        console.log(id)
        const itinerario = await Itinerary.findById({_id: id})
        console.log(itinerario)
        res.json({success: true, respuesta: itinerario.comments})
        
    }
}

module.exports = itineraryController