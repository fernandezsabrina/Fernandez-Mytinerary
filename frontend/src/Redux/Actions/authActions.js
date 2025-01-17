import axios from "axios"
import Swal from 'sweetalert2'

const authActions = {
    newUser: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://mytineraryweb.herokuapp.com/user/signup', nuevoUsuario)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({ type: 'LOG_USER', payload: respuesta.data })
        }
    },
    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({ type: 'LOG_OUT_USER' })
        }
    },

    logFromLocalStorage: (token) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post('http://mytineraryweb.herokuapp.com/user/ls', { token }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'LOG_USER', payload: {
                        response: {...respuesta.data.response}
                    }
                })
            } catch (err) {
                if (err.response.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Wrong login!!!',
                    })
                    localStorage.clear()
                    return '/'
                }
            }

        }
    },

    loginUser: (user) => {

        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://mytineraryweb.herokuapp.com/user/login', user)

            if (!respuesta.data.success) {

                return respuesta.data

            }
            dispatch({ type: 'LOG_USER', payload: respuesta.data })
        }
    }
}

export default authActions