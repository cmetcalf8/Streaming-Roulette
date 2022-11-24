import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import NavBar from "./components/NavBar";
import './App.css';
import AddFavourites from './components/AddFavourites';
// import { useEffect } from 'react';


export default function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  
  //search requests
  const getMovieRequest = async (searchValue) => {
    const url = 'https://streaming-availability.p.rapidapi.com/search/basic';
    
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
    setMovies(responseJson.Search);
    };
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(()=>{
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
    }, []);
  

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const RemoveFavourites = (movie) => {
    const newFavouriteList = favourites.filter(
    (favourite) => favourite.imdbID !== movie.imdbID)
};

  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);

  return(
  <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    <div className="row">
      <MovieList 
      movies={movies} 
      handleFavouritesClick={addFavouriteMovie}
      favouriteComponent = {AddFavourites}
      />
   </div>
   <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' />      
      </div>
      <div className='row'>
        <MovieList
          movies={favourites}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={RemoveFavourites}
          />
      </div>
    </div>
   </div>
  );
  };

