import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDescription from './components/movieDescription';
import FilterList from './components/FilterList'; 
//Import FilterList component

const movies = [
  {
    id: 1,
    title: 'Justice League',
    description: 'Fueled by his restored faith in humanity and inspired by Supermans selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat. Together Batman and Wonder Woman work quickly to recruit a team to stand against this newly awakened enemy.',
    trailerLink: "https://www.youtube.com/embed/r9-DM9uBtVI?si=5wYc9EhCZC9wYKhS",
    posterURL: 'https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2017/11/Justice-League-stars-watches-celebrity-style-Superhero-mast-mobile.jpg',
    rating: 4.9,
    genres: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    id: 2,
    title: "The Incredible Hulk",
    description: "Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen.",
    trailerLink: "https://www.youtube.com/embed/xbqNb2PFKKA?si=QzpMTKNW8UmseNfs",
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_.jpg',
    rating: 4.8,
    genres: ['Action', 'Sci-Fi'],
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description: 'The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    rating: 4.9,
    trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY?si=2EBo-isgotj7Wxu8',
    genres: ['Action', 'Crime', 'Drama'],
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    description: 'The Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
    posterURL: 'https://m.media-amazon.com/images/I/91bQzd+HWHL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.8,
    trailerLink: 'https://www.youtube.com/embed/TcMBFSGVi1c?si=JY3iJae7x6O9opwF',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    id: 5,
    title: 'Wonder Woman',
    description: 'When an American pilot crashes on the shores of her sheltered island paradise, Diana, an Amazonian princess, learns of a conflict raging in the outside world.',
    posterURL: 'https://musicart.xboxlive.com/7/629e5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    rating: 4.7,
    trailerLink: 'https://www.youtube.com/embed/1Q8fG0TtVAY?si=nxTQ09AMREaEDR32',
    genres: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    id: 6,
    title: 'Black Panther',
    description: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.',
    posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZbr2QKZB8Z4iSVtAra9ydwMQB7GGm7w-aw&s',
    rating: 4.7,
    trailerLink: 'https://www.youtube.com/embed/xjDjIWPwcPU?si=zz8hN5J942h_NYCb',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    id: 7,
    title: 'Man of Steel',
    description: 'Clark Kent, one of the last of an extinguished race disguised as an unremarkable human, is forced to reveal his identity when Earth is invaded by an army of survivors who threaten to bring the planet to the brink of destruction.',
    posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_jDhJvXGUYstuokLgTWpmfE2CWd91yM7Og&s',
    rating: 4.6,
    trailerLink: 'https://www.youtube.com/embed/T6DJcgm3wNY?si=4NTPZ1HPVXRcQSl9',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
  },
  {
    id: 8,
    title: 'Spider-Man: Homecoming',
    description: 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.',
    posterURL: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/spider-man-with-spidey-sense.jpg?q=50&fit=contain&w=943&h=&dpr=1.5',
    rating: 4.6,
    trailerLink: 'https://www.youtube.com/embed/U0D3AOldjMU?si=0loXZKE8zTnhsStE',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
  },
];

function App() {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (selectedGenre) => {
    if (selectedGenre === '') {
      setFilteredMovies(movies); // Reset to all movies if no genre selected
    } else {
      const filtered = movies.filter(movie => movie.genres.includes(selectedGenre));
      setFilteredMovies(filtered);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
