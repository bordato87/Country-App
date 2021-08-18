import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Card from './Card';
import {getCountries} from '../actions/index';
import Pagination from './Pagination';
import './styles/Cards.css';


function Cards() {

    /* const dispatch = useDispatch(); */     
    /* useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]); */
    const countries = useSelector(state => state.countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFierstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = countries.slice(indexOfFierstCountry, indexOfLastCountry);
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return(
        <div>
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