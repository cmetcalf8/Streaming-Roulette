import React, { useState } from 'react';
import "../App.css";
import { MDBBtn } from 'mdb-react-ui-kit';

const HomePage = () => {

    const [movieState, setMovieState] = useState(null);

    const apiURL = 'https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en'

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c68107b76msh0f02cdb6d4eba28p175ef4jsn63d1155e79dc',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    const handleButtonClick = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiURL, options).then(response => response.json()).then(response =>  {
                const movies = response.results;
                const movie = movies[Math.floor(Math.random()*movies.length)];
                setMovieState(movie);
            });
        } catch (err) {
            console.log(err)
        }
      };
    return (
        <div className='home'>
            <div>
                <h1>Welcome to Streaming Roulette</h1>
            </div>
            <div>
                <h4>Hit the start button below to get a random movie to watch.</h4>
            </div>
            <div>
                <MDBBtn rounded className='text-light' color='dark' onClick={handleButtonClick}>
                    Start
                </MDBBtn>
            </div>
           {movieState&&<div>
               <div>{movieState.title}</div> 
               <div>{movieState.overview}</div> 
               <div>{movieState.imbdRating}</div> 

                    <div>
                        <img src={movieState.posterURLs.original} className="movie-poster"></img>
                    </div>
                    
                
              
            </div>}
        </div>
    )
}

export default HomePage;