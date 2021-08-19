/* import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCountries, orderByName} from '../actions/index';
import './styles/Filters.css';

function Filter() {

    const dispatch = useDispatch();
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
    }

    return(
        <div className="divBar">
            <input placeholder="find country" type="text"/>
            <select>
                <option value=''>Region</option>
                <option value='Europe'>Europe</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Polar'>Polar</option>
            </select>
            <select>
                <option value=''>Population</option>
                <option value='Up'>Up</option>
                <option value='Down'>Down</option>
            </select>
            <select onChange={(e) => handleSort(e)}>
                <option value='ZtoA'>ZtoA</option>
                <option value="AtoZ">AtoZ</option>
            </select>
        </div>
    );
}

export default Filter; */