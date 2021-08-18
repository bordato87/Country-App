import React from 'react';
import {useHistory} from 'react-router-dom';
import './styles/Landing.css';

function Landing() {

    const history = useHistory()
    function handleClick(e){
        e.preventDefault();
        history.push('/home');
    }
    return(
        <div className="landing">
            <h1 className="title">Welcome to Country App</h1>
            <button className="button" onClick={(e)=>handleClick(e)}>Go To App</button>
        </div>
    );
}

export default Landing;