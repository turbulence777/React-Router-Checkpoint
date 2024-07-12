import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const movieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={styles.link}>
      <div className="movie-card" style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Img variant="top" src={movie.posterURL} style={styles.image} />
          <Card.Body style={styles.body}>
            <Card.Title style={styles.title}>{movie.title}</Card.Title>
            <Card.Text style={styles.text}>{movie.description}</Card.Text>
            <Card.Text style={styles.rating}>⭐⭐⭐⭐ {movie.rating}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    overflow: 'hidden', // Ensures the card's border radius is respected
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '200px', // Set a fixed width for the image
    height: 'auto', // Maintain aspect ratio
    objectFit: 'cover', // Ensure the image covers the area without distortion
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f8f9fa', // Light background color for better text readability
    flex: '1 1 auto',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333', // Darker text color for better readability
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
    color: '#666', // Softer text color for less contrast
    marginBottom: '15px',
    flex: '1', // Allow text to take up available space
  },
  rating: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#ffcc00', // Yellow color for the star rating
  },
};

export default movieCard;
