import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index";
import './styles/Detail.css';

function Detail(props) {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
    },[dispatch]);
    const country = useSelector((state) => state.country);
    return(
        <div className="detail">
            {
                country.length > 0 ?
                <div className="flagDiv">
                    <img className="flag" src={country[0].flag}/>
                <div/>
                    <p className="p">Country: {country[0].name}</p>
                    <p className="p">Region: {country[0].region}</p>
                    <p className="p">Country Code: {country[0].id}</p>
                    <p className="p">Capital: {country[0].capital}</p>
                    <p className="p">Subregion: {country[0].subregion}</p>
                    <p className="p">Area: {country[0].area} km²</p>
                    <p className="p">Pupulation: {country[0].population}</p>
                <span>
                    <p className="a">Activities: </p>
                        <div className="activities">
                            {country[0].activities.length > 0 ? country[0].activities.map((activity,i) => 
                            <div className="divActivity" key={i}>{activity.name}
                            <p>Duration: {activity.duration} hs</p>
                            <p>Dificulty: {activity.dificulty}</p>
                            <p>Seasons:{activity.seasons.map(s=> <li>{s.name}</li>)}</p>
                            </div>)  :
                            <p>There are no activities...</p>
                            }
                        </div>
                </span>
                </div> : <p>Loading...</p>
            }
        </div>
    );
}

export default Detail;