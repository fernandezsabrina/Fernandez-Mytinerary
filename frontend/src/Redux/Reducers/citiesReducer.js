const initialState = {
    cities: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_CITIES":
            return {
                ...state,
                cities: action.payload
            }
           break
        default:
            return state
    }
}

export default citiesReducer