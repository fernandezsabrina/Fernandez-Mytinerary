import axios from "axios"

const authActions = {
    newUser: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/user/signup', nuevoUsuario)
            console.log(respuesta)
            dispatch({type:'NEW_USER', payload: respuesta.data})
        }
    }
}

export default authActions