import React, { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from "./components/SearchBox";
import './App.css';

const APP = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  //search requests
  const getMovieRequest = async (searchValue) => {
    const url = 'https://streaming-availability.p.rapidapi.com/?s={searchValue}search/basic?apikey='2c68107b76msh0f02cdb6d4eba28p175ef4jsn63d1155e79dc';
    
    const response = await fetch(url);
    const responseJson = await response.json();



    if(responseJson.Search) {
    setMovies(responseJson.Search);
    }

  };

  use useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);

  return
  <div className='container-fluid movie-app'>
  <div className='row d-flex align-items-center mt-4 mb-4'>
  <MovieLIstHeading heading='Movies'/>
  <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>

  </div>
  <div className="row">
    <MovieList movies={movies} />
  </div>
};
//api stuff
