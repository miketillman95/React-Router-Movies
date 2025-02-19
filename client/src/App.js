import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, Switch } from 'react-router-dom'

import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'



export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {setMovieList(response.data)
          console.log(response)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  // const addToSavedList = id => {
//     // This is stretch. Prevent the same movie from being "saved" more than once
//  
//
  
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Route exact path='/'>
        <MovieList movies={movieList}/>
      </Route>

      <Route exact path= '/movies/:id'>
        <Movie movie={movieList}/>
        {console.log(<Movie/>)}/
      </Route>
      {/* <Route exact path='/banana'>
        <div movies={movieList}>hello world</div>
      </Route> */}
    </div>
  );
}
