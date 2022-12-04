import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchForm.css'
import { Link } from 'react-router-dom';

export const SearchForm = ({search,handleSearch,handleSubmit}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e.target.search.value)
    }

    return (
        <form onSubmit={onSubmit} className='search-form' >
            <input 
                onChange={(e)=> handleSearch(e.currentTarget.value)} 
                type="text" 
                name='search' 
                className='search-input' 
                placeholder='Search...' 
                value={search} />
            <button type='submit' className='search-btn'>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </form>
    );
}

