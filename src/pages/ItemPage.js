import React from 'react';
import { useParams } from 'react-router';

export const ItemPage = () => {
    const tr = useParams();
    console.log(tr)
    return (
        <div>
            ItemPage
        </div>
    );
}
