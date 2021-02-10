import axios from 'axios'

const itinerariesActions = {
    listarItinerarios: (id) => {
        return async (dispatch, getState) => {
            const data = await axios.get('http://localhost:4000/itineraries/'+id)
            dispatch({ type: "ALL_ITINERARIES", payload: data.data.respuesta })
        }
    },

    crearComentario: (comentario) => {
        return async (dispatch, getState) => {
            const data = await axios.post('http://localhost:4000/comments', comentario)
            dispatch({ type: "CREATE_COMMENT", payload: data.data.respuesta })
        }
    }

}

export default itinerariesActions