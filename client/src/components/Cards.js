import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Card from './Card';
import {getCountries, orderByName, filterByRegion, orderByPopulation, filterByActivity, getActivities} from '../actions/index';
import Pagination from './Pagination';
import './styles/Cards.css';


function Cards() {

    const dispatch = useDispatch();    
    useEffect(() => {
        dispatch(getCountries());
    }, []);
    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);
    const activities = useSelector(state => state.activities);
    const countries = useSelector(state => state.countries);
    const [alphabet, setAlphabet]= useState('');
    const [region, setRegion]= useState('');
    const [population, setPopulation]= useState('')
    const [activity, setActivity]= useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFierstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = countries.slice(indexOfFierstCountry, indexOfLastCountry);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    function handleSort(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setAlphabet(`Order ${e.target.value}`)
    };
    function handleRegion(e) {
        e.preventDefault()
        dispatch(filterByRegion(e.target.value))
        setCurrentPage(1);
        setRegion(`Filter ${e.target.value}`)
    }
    function handlePopulation(e) {
        e.preventDefault()
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setPopulation(`Pop ${e.target.value}`)
    };
    function handleActivity(e) {
        e.preventDefault()
        dispatch(filterByActivity(e.target.value))
        setCurrentPage(1);
        setActivity(`Act ${e.target.value}`)
    };
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getCountries());
    }


    return(
        <div>
            <div className="divBar">
            <input placeholder="find country" type="text"/>
            <select onChange={(e) => handleRegion(e)}>
                <option value=''>Region</option>
                <option value='Europe'>Europe</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Polar'>Polar</option>
            </select>
            <select onChange={(e) => handlePopulation(e)}>
                <option value='UpDown'>Population</option>
                <option value='Up'>Higher</option>
                <option value='Down'>Lower</option>
            </select>
            <select onChange={(e) => handleSort(e)}>
                <option value="A-Z">A-Z</option>
                <option value="AtoZ">AtoZ</option>
                <option value='ZtoA'>ZtoA</option>
            </select>
            <select onChange={(e) => handleActivity(e)}>
                <option value="Activities">Activities</option>
                {activities.map(a => <option value={a.name} key={a.name}>{a.name}</option>)}
            </select>
            <button onClick={(e) => handleClick(e)}>Reload</button>
        </div>
            <div className="container">
            {currentCountry?.map((country) => {
                return (
                    <Link className="linkCard" to={`/country/${country.id}`} key={`${country.id}`}>
                        <Card
                            name={country.name}
                            flag={country.flag}
                            region={country.region}
                        />
                    </Link>
                )})
            }
            </div>
            <Pagination className="pagination" countriesPerPage={countriesPerPage} allCountries={countries.length} pagination={pagination}/>
        </div>
    );
}

export default Cards;