// src/components/MovieList.js
import React from 'react';
import MovieCard from './movieCard';
import App from '../App';

const movieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default movieList;
