import axios from 'axios';

export function getCountries() {
    return async function(dispatch) {
        const countries = await axios("http://localhost:3001/api/countries", {
        });
        return dispatch({type:"GET_COUNTRIES", payload: countries.data});
    };
}

export function getDetail(id) {
    return async function(dispatch) {
        const country = await axios("http://localhost:3001/api/countries/" + id, {
        });
        return dispatch({type:"GET_DETAIL", payload: country.data});
    };
}

export function getActivities() {
    return async function(dispatch) {
        const activities = await axios("http://localhost:3001/api/activity", {
        });
        return dispatch({type:"GET_ACTIVITIES", payload: activities.data});
    };
}

export function orderByName(payload) {
    return {
        type:"ORDER_BY_NAME",
        payload
    }
}

export function orderByPopulation(payload) {
    return {
        type:"ORDER_BY_POPULATION",
        payload
    }
}

export function filterByRegion(payload) {
    return {
        type:"FILTER_BY_REGION",
        payload
    }
}

export function filterByActivity(payload) {
    return {
        type:"FILTER_BY_ACTIVITY",
        payload
    }
}

export function postActivity(activity) {
    return async function() {
        try{
            const newActivity = await axios.post("http://localhost:3001/api/activity", activity);
            console.log(newActivity);
        }
        catch(error){
            console.log(error);
        }
    };
}