import React from 'react';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import linkedin from './img/linkedin.png';
import youtube from './img/youtube.png';
import './styles/Footer.css';

function Footer() {
    return(
        <div className="footer">
            <div>
                <a>Nuestras redes:</a>
            </div>
            <div>
                <a href="https://linkedin.com">
                    <img src={linkedin} width="50" height="50"/>
                </a>
                <a href="https://twitter.com">
                    <img src={twitter} width="50" height="50"/>
                </a>
                <a href="https://instagram.com">
                    <img src={instagram} width="50" height="50"/>
                </a>
                <a href="https://youtube.com">
                    <img src={youtube} width="50" height="50"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;