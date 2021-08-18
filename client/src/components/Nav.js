import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Nav.css';

function Nav() {
    return(
        <div className="cont">
            <div className="nav">
                <Link to="/home" className="link">Home</Link>
                <Link to="/add" className="link">New Activity</Link>
                <Link to="/abaut" className="link">Abaut</Link>
            </div>
        </div>
    );
}

export default Nav;