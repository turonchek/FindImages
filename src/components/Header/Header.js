import React from 'react';
import { useLocation, useNavigate } from 'react-router';
// import { Navigation } from '../Navigation/Navigation';
import { SearchForm } from '../SearchForm/SearchForm';
import './Header.css'

export const Header = ({search,handleSearch,handleSubmit}) => {

    const {pathname} = useLocation();
    const navigate = useNavigate();

    return (
        <div className='header'>
            <h1 className='main-title'>Find your image</h1>
            {pathname==="/photos" ? (<SearchForm 
                handleSearch={handleSearch} 
                search={search}
                handleSubmit={handleSubmit}
                />) : null}
            {pathname!=="/" ? <button onClick={() => {
                navigate('/',{replace:true})
            }}>
                Home
            </button> : null}
            {pathname!=="/" ? <button onClick={() => navigate(-1)}>
                Back
            </button> : null}
        </div>
    );
}
