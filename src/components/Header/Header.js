import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchForm } from '../SearchForm/SearchForm';
import './Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <h1 className='main-title'>SnapShot</h1>
            <SearchForm/>
            <Navigation/>
        </div>
    );
}
