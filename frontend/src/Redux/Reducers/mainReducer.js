import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'
import authReducer from './authReducer'

const mainReducer = combineReducers({
    cities: citiesReducer,
    city: cityReducer,
    itinerary: itineraryReducer,
    auth: authReducer
})

export default mainReducer
