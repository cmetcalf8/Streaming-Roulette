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

 function getRandomMovie(){
    axios.request(options).then(function (response) {
        
        // console.log(response.data.results);
        randomize(response.data.results);
        // return response.data
    }).catch(function (error) {
        console.error(error);
    });
}
getRandomMovie()

function randomize(movieArray){

  var randomMovieIndex = Math.floor(Math.random()*movieArray.length)
  console.log(randomMovieIndex)

var randomMovieTitle = movieArray[randomMovieIndex].title
console.log(randomMovieTitle)
var randomMovieRating = movieArray[randomMovieIndex].imdbRating
var randomMovieOverview = movieArray[randomMovieIndex].overview
var randomMovieIMG = movieArray[randomMovieIndex].posterPath

var movieObject = {
  title: randomMovieTitle,
  ratingIMDB: randomMovieRating,
  overview: randomMovieOverview,
  imageURL: randomMovieIMG
}
console.log(movieObject)
return movieObject;
}