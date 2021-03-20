import axios from 'axios'

const citiesActions = {
    listarCiudades: () => {
        return async (dispatch, getState) => {
            const data = await axios.get('http://mytineraryweb.herokuapp.com/cities')
            dispatch({ type: "ALL_CITIES", payload: data.data.respuesta })
        }
    },

    filtrarCiudades: (filtro) => {
        return (dispatch, getState) => {
            dispatch({type: "FILTER_CITIES", payload: filtro})
        }
    },

    nuevaCiudad: (nuevaCiudad) => {
        return async (dispatch, getState) => {
            const data = await axios.post('http://mytineraryweb.herokuapp.com/cities', nuevaCiudad)
            dispatch({ type: "NEW_CITY", payload: data.data.respuesta})
        }
    }
}

export default citiesActions