import React from 'react';
import { ItemsList } from '../components/ItemsList/ItemsList';

export const PhotosPage = ({results}) => {
    return (
        <ItemsList results={results}/>
    )
}
