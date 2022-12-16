import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div>
            <Link to="/photos" >
                <button>
                    Find Your Photo
                </button>
            </Link>
        </div>
    );
}

