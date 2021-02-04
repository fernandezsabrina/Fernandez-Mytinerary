// enrutador
const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')

router.route('/cities')
    .get(cityController.allCities)
    .post(cityController.addCity)

router.route('/city/:id')
    .get(cityController.singleCity)

router.route('/itineraries/:id')
    .get(itineraryController.allItineraries)
    .post(itineraryController.addItinerary)

router.route('/user/signup')
    .post(userController.signUp)

router.route('/user/login')
    .post(userController.logIn)


module.exports = router