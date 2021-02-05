const initialState = {
    loggedUser: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_USER':
            if(!action.payload.success) {
                alert("error")
                return state
            }
            return {
                ...state,
                loggedUser: action.payload.response
            }
        default:
            return state
    }

}

module.exports = authReducer