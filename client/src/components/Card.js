import React from 'react';
import './styles/Card.css';

function Card({name, flag, region}) {
    return(
        <div className="card">
            <img className='img' src={flag} alt="image not found"/>
            <h3>Country: {name}</h3>
            <h3>Region: {region}</h3>
        </div>
    );
}

export default Card;