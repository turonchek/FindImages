import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchForm = () => {
    return (
        <form className='search-form' >
            <input 
                onChange={console.log} 
                type="text" 
                name='search' 
                className='search-input' 
                placeholder='Search...' 
                value='' />
            <button type='submit' className='search-btn'>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </form>
    );
}

