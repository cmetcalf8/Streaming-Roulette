const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: 'us',
    service: 'netflix',
    type: 'movie',
    genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '2c68107b76msh0f02cdb6d4eba28p175ef4jsn63d1155e79dc',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

  


function randomize(movieArray){

  var randomMovieIndex = Math.floor(Math.random()*movieArray.length)
 

var randomMovieTitle = movieArray[randomMovieIndex].title

var randomMovieRating = movieArray[randomMovieIndex].imdbRating
var randomMovieOverview = movieArray[randomMovieIndex].overview
var randomMovieIMG = movieArray[randomMovieIndex].posterPath

var movieObject = {
  title: randomMovieTitle,
  ratingIMDB: randomMovieRating,
  overview: randomMovieOverview,
  imageURL: randomMovieIMG
}

return movieObject;
}

module.exports = {
  
  getMovieRecomendation: async function () {
    try {
    const response = await axios.request(options) 
        
        // console.log(response.data.results);
        const movie = randomize(response.data.results);
        console.log(movie)
        console.log('zzzz')
        return movie
    }
    catch (error) {
        console.error(error);
    };
  },
};