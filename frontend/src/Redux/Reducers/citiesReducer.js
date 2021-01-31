const initialState = {
    cities: [],
    ciudadesFiltradas: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_CITIES":
            return {
                ...state,
                cities: action.payload,
                ciudadesFiltradas: action.payload
            }
            break
        case "FILTER_CITIES":
            const filtradoCiudades = state.cities.filter(city =>city.name.toLowerCase().indexOf(action.payload.trim().toLowerCase()) == 0)
            return {
                ...state,
                ciudadesFiltradas: filtradoCiudades
            }
            break

        default:
            return state
    }


}

export default citiesReducer