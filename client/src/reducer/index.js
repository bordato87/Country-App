const initialState = {
    countriesLoaded :[],
    countries: [],
    country: [],
    activities: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                countriesLoaded: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                country: action.payload
            }
        case 'ORDER_BY_NAME' :
            if(action.payload === 'AtoZ') {
                let filtAZ = state.countriesLoaded.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    countries: filtAZ
                }}
            if(action.payload === 'ZtoA') {
                let filtZA = state.countriesLoaded.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                 })
            return {
                ...state,
                countries: filtZA
            }}
            if (action.payload === 'A-Z') {
                let sinFilt = state.countriesLoaded
                return {
                    ...state,
                    countries: sinFilt
                }}
        case 'ORDER_BY_POPULATION' :
            if(action.payload === 'Up') {
                let filtUp = state.countriesLoaded.sort(function (a, b) {
                    if (a.population < b.population) {
                        return 1;
                    }
                    if (a.population > b.population) {
                        return -1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    countries: filtUp
                }}
                if(action.payload === 'Down') {
                    let filtDown = state.countriesLoaded.sort(function (a, b) {
                        if (a.population < b.population) {
                            return -1;
                        }
                        if (a.population > b.population) {
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        countries: filtDown
                    }}
                
        case 'FILTER_BY_REGION' :
            return {
                ...state,
                countries: state.countriesLoaded.filter((e) => e.region === action.payload)
            }
        case 'FILTER_BY_ACTIVITY' :
            return {
                ...state,
                countries: state.countriesLoaded.filter((x) => { return x.activities.some((z) => z.name === action.payload) })
            }
        case 'GET_ACTIVITIES' :
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state;
    }
};

export default reducer;