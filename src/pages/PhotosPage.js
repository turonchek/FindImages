import React from 'react';
import { ItemsList } from '../components/ItemsList/ItemsList';
import { Pagination } from '../components/Pagination/Pagination';

export const PhotosPage = ({results,handlePageClick,currentPage}) => {
    return (
        <>
            <ItemsList results={results.results}/>
            {results.results.length>0 && <Pagination 
                handlePageClick={handlePageClick}
                pageCount={10}
                currentPage={currentPage}
            />}
        </>
    )
}
