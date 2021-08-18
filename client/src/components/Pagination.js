import React from 'react';
import './styles/Pagination.css';

function Pagination ({countriesPerPage, allCountries , pagination}) {
    const pageNumbers = [];
        for(let i=1; i<=Math.ceil(allCountries / countriesPerPage); i++){
            pageNumbers.push(i);
        }
    return(
        <div className="containerDiv">
            <ul className='pagination'>
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <a className='number' key={number} onClick={() => pagination(number)}> 
                            {number}
                        </a>
                    ))
                }     
            </ul>
        </div>
    );
}

export default Pagination;