import React from 'react';
import "../App.css";
import { MDBBtn } from 'mdb-react-ui-kit';

const homePage = () => {


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '803769a760msh0b927317a3037b5p16a8f3jsnaab08108dfb1',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };
    
    fetch('https://imdb-top-100-movies.p.rapidapi.com/premiummovies', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        
        return (
            <div className='home'>
            <div>
                <h1>Welcome to Streaming Roulette</h1>
            </div>
            <div>
                <h4>Hit the start button below to get a random movie to watch.</h4>
            </div>
            <div>
                <MDBBtn rounded className='text-light' color='dark' onClick={options}>
                    Start
                </MDBBtn>
            </div>
        </div>
    )
}

export default homePage;