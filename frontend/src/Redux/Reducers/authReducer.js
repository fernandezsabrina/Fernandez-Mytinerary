const initialState = {
    loggedUser: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER':
            localStorage.setItem('username', action.payload.response.username)
            localStorage.setItem('urlpic', action.payload.response.urlpic)
            localStorage.setItem('token', action.payload.response.token)
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT_USER':
            localStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
        default:
            return state
    }

}

module.exports = authReducer