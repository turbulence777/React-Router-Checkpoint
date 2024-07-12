import React, { useState } from 'react';
import MovieCard from './movieCard';
import { Container } from 'react-bootstrap';
import Filter from './FilterList'; // Import Filter component

const HomePage = ({ movies }) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  // Filter movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
           (filterRating === '' || movie.rating >= parseFloat(filterRating));
  });

  return (
    <Container>
      <div style={styles.header}>
        <h1 style={styles.heading}>Discover Movies</h1>
        <p style={styles.subheading}>Explore our curated collection of amazing films</p>
        <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} /> {/* Render Filter component */}
      </div>
      <div className="movie-list" style={styles.movieList}>
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Container>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#666',
  },
  movieList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default HomePage;
