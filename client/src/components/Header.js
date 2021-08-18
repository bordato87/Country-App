import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div className="header">
            <Link to="/home">Header</Link>
        </div>
    );
}

export default Header;