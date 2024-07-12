// src/components/AddMovie.js
import React, { useState } from 'react';

const addMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ title, description, posterURL, rating: parseFloat(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input 
        type="text" 
        placeholder="Poster URL" 
        value={posterURL} 
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input 
        type="number" 
        placeholder="Rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default addMovie;
