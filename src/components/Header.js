import React from 'react';
import { Navigation } from './Navigation';
import { SearchForm } from './SearchForm';

export const Header = () => {
    return (
        <div className='header'>
            <h1>SnapShot</h1>
            <SearchForm/>
            <Navigation/>
        </div>
    );
}
