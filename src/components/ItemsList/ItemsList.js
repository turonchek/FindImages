import React from 'react';
import { Link } from 'react-router-dom';
import './ItemsList.css'

export const ItemsList = ({results}) => {

    

    console.log(results)
    return (
        <>
        
        <ul className='img-list'>
                {results && results.map(({id,alt_description,urls}) => (
                    <li className='img-list__item' key={id}>
                        <a target="_blank" href={urls.full}>Open in full size</a>
                        <Link to={`/photos/${id}`}>
                            <div className='img-wrapper'>
                                <img className='img-item' src={urls.full} alt={alt_description} />
                            </div>
                        </Link>
                    </li>
                ) )}
            </ul>
        </>
    );
}
