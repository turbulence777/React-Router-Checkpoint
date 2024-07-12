import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <Container style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{movie.title}</h1>
        <p style={styles.description}>{movie.description}</p>
      </div>
      <div style={styles.videoContainer}>
        <iframe
          width="100%"
          height="400"
          src={movie.trailerLink}
          title={`${movie.title} Trailer`}
          frameBorder="0"
          allowFullScreen
          style={styles.video}
        ></iframe>
      </div>
      <div style={styles.backLink}>
        <Link to="/" style={styles.link}>
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '40px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
  },
  videoContainer: {
    marginBottom: '20px',
  },
  video: {
    borderRadius: '8px',
  },
  backLink: {
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
  },
};

export default MovieDescription;
