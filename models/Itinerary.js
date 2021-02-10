const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    likes: { type: Array, default: 0 },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    hashtag: { type: Array, required: true },
    idCity: { type: String, required: true },
    userName: { type: String, required: true },
    userPic: { type: String, required: true },
    comments: [
        {
            userID: { type: mongoose.Schema.ObjectId, ref: 'user', required: true },
            comment: { type: String }
        }
    ],
    activities: [
        {
            activityTitle: { type: String, required: true },
            activityPic: { type: String, required: true }
        }
    ]

})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary