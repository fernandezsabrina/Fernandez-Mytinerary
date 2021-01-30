import {combineReducers} from 'redux'
import citiesReducer from './citiesReducer'
import cityReducer from './cityReducer'
import itineraryReducer from './itineraryReducer'

const mainReducer = combineReducers({
    cities: citiesReducer,
    city: cityReducer,
    itinerary: itineraryReducer
})

export default mainReducer
