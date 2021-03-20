import axios from 'axios'

const itinerariesActions = {
    listarItinerarios: (id) => {
        return async (dispatch, getState) => {
            const data = await axios.get('http://mytineraryweb.herokuapp.com/itineraries/' + id)
            dispatch({ type: "ALL_ITINERARIES", payload: data.data.respuesta })
        }
    },

    crearComentario: ({ idIt, idUser, comment }) => {
        return async (dispatch, getState) => {
            const data = await axios.put('http://mytineraryweb.herokuapp.com/comments', { idIt, idUser, comment })
            dispatch({ type: "GET_COMMENTS", payload: data.respuesta })
        }
    },

    obtenerComentario: (idIt) => {
        return async(dispatch, getState) => {
            const data = await axios.get('http://mytineraryweb.herokuapp.com/comments', {params: {idIt}})
         console.log(data)
            dispatch({ type: "GET_COMMENTS", payload: data.respuesta})
        }
    },

    likedItinerary: (userId) => {
        return async (dispatch, getState) => {
            const data = await axios.put('http://mytineraryweb.herokuapp.com/likes', userId)
            dispatch({ type: "LIKE_ITINERARY", payload: data.likes })
        }

    },

    dislikeItinerary: (userId) => {
        return async (dispatch, getState) => {
            const data = await axios.put('http://mytineraryweb.herokuapp.com/dislikes', userId)
            dispatch({ type: "LIKE_ITINERARY", payload: data.dislikes })
        }
    }

}

export default itinerariesActions