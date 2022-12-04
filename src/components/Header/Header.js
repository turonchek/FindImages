import React from 'react';
// import { Navigation } from '../Navigation/Navigation';
import { SearchForm } from '../SearchForm/SearchForm';
import './Header.css'

export const Header = ({search,handleSearch,handleSubmit}) => {
    return (
        <div className='header'>
            <h1 className='main-title'>Find your image</h1>
            <SearchForm 
                handleSearch={handleSearch} 
                search={search}
                handleSubmit={handleSubmit}
                />
            {/* <Navigation/> */}
        </div>
    );
}
