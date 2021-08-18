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