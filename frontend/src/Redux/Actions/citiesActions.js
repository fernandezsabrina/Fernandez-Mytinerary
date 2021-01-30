import axios from 'axios'

const citiesActions = {
    listarCiudades: () => {
        return async(dispatch, getState) => {
            const data = await axios.get('http://localhost:4000/cities')
            dispatch({ type: "ALL_CITIES", payload: data.data.respuesta})
        }
    }
}

export default citiesActions