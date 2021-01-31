const initialState = {
    itineraries: []
}

const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload
            }
            break
        default:
            return state
    }

}

export default itineraryReducer