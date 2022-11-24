import React from 'react';

function MovieList(props) {
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div className='d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
                </div>))}

        </div>
    )
}

export default MovieList;