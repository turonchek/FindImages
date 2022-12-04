import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import '../components/ItemsList/ItemsList.css'

export const ItemPage = () => {
    const {id} = useParams();

    const [itemData, setItemData] = useState([]);

    const getItemData = async () => {
        // const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=_I_Z5aV1s1jZhqolUAgf_7Ko1CPd-dWqsqJp-hIEb8o`)
        
        const {data} = await axios.get(`https://api.unsplash.com/photos/`,{
        params:{
            id:id
        },
        headers: {
            Authorization: 'Client-ID _I_Z5aV1s1jZhqolUAgf_7Ko1CPd-dWqsqJp-hIEb8o'
        },
        
    })
    console.log(data)
        setItemData(data);
    }
    
    useEffect(() => {
        getItemData();
    }, []);

    return (
        <ul className='img-list'>
            {id}
            {itemData.map(({urls,alt_description,id}) => (
                <li className='img-list__item' key={id}>
                    <div key={id} className='img-wrapper'>
                        <img className='img-item' src={urls.regular} alt={alt_description} />
                    </div>
                </li>
            ))}
        </ul>
    );
}
