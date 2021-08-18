const initialState = {
    countries: [],
    country: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                country: action.payload
            }
        default:
            return state;
    }
};

export default reducer;