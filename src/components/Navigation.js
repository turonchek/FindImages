import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul className='nav-list'>
                <li className='nav-list__item'>
                    <NavLink to='/mountain'>Mountain</NavLink>
                </li>
                <li className='nav-list__item'>
                    <NavLink to='/beach'>Beach</NavLink>
                </li>
                <li className='nav-list__item'>
                    <NavLink to='/birds'>Birds</NavLink>
                </li>
                <li className='nav-list__item'>
                    <NavLink to='/food'>Food</NavLink>
                </li>
            </ul>
        </nav>
    );
}

