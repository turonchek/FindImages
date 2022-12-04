import React from 'react';
import { Link } from 'react-router-dom';
import './ItemsList.css'

export const ItemsList = ({results}) => {
    return (
        <ul className='img-list'>
                {results && results.map(({id,alt_description,urls}) => (
                    <li className='img-list__item' key={id}>
                        <Link to={`/photos/${id}`}>
                            <div className='img-wrapper'>
                                <img className='img-item' src={urls.full} alt={alt_description} />
                            </div>
                        </Link>
                    </li>
                ) )}
            </ul>
    );
}
