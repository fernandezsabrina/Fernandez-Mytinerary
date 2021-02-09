import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import itineraryReducer from './itineraryReducer'
import authReducer from './authReducer'

const mainReducer = combineReducers({
    cities: citiesReducer,
    itinerary: itineraryReducer,
    auth: authReducer
})

export default mainReducer
