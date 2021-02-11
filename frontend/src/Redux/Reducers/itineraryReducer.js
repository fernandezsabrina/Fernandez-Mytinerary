const initialState = {
    itineraries: [],
    comments: []
}

const itineraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload
            }
            break
        case "GET_COMMENTS":
            return{
                ...state,
                comments: action.payload
            }
        default:
            return state
    }

}

export default itineraryReducer