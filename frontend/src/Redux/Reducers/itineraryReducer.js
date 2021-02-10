const initialState = {
    itineraries: [],
    comment: {}
}

const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload
            }
            break
        case "CREATE_COMMENT":
            return {
                ...state,
                comment: action.payload
            }
        default:
            return state
    }

}

export default itineraryReducer