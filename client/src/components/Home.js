import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCountries} from '../actions/index';
import Cards from './Cards';
import './styles/Home.css';

function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
    <div className='divHome'>
        <Cards/>
    </div>
    );
}

export default Home;