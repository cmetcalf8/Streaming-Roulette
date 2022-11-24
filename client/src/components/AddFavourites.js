import React from 'react';

function AddFavourites() {
    return (
        <div>
            <span className='mr-2'>Add to Favourites</span>
                <svg>
                    width='1em'
                    height='1em'
                    viewbox='0 0 16 16'
                    class='bi bi-heart-fill'
                    fill='red'
                    xmlns='http://www.w3.org/2000/svg'
                </svg>

            <path   
                fill-rules='evenodd'
                d='m8 1.314c12.438-3.248 23.534 4.735 8 15-7.534 4.736'
            />
        </div>
    );
};

export default AddFavourites;