import React, { useState } from 'react';
import "./Movies.css";

const twilightSagaMovies = [
    {
      title: 'Twilight',
      date: '2008',
      poster: 'https://i.ebayimg.com/images/g/LPoAAOSwX35jclMF/s-l1200.webp',
      description: 'A teenage girl falls in love with a vampire in this romantic fantasy film.',
      favoriteScene: 'The meadow scene where Edward reveals his sparkling skin in sunlight.',
      favoriteSong: 'Flightless Bird, American Mouth by Iron & Wine',
      colorPaletteImage: 'https://example.com/twilight-color-palette.jpg',
    },
    {
      title: 'New Moon',
      date: '2009',
      poster: 'https://nz.originalfilmart.com/cdn/shop/products/twilightnewmoon_2009_original_film_art_b4de3022-d6fa-43f4-815a-c2cc4df164f1_5000x.jpg?v=1618949594',
      description: 'Bella finds herself in a love triangle with a vampire and a werewolf in this sequel to Twilight.',
      favoriteScene: 'Bella racing through the streets of Volterra to save Edward.',
      favoriteSong: 'Possibility by Lykke Li',
      colorPaletteImage: 'https://example.com/new-moon-color-palette.jpg',
    },
    {
      title: 'Eclipse',
      date: '2010',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_FMjpg_UX1000_.jpg',
      description: 'Bella is torn between her love for a vampire and a werewolf as a new threat emerges.',
      favoriteScene: 'The tent scene where Edward and Jacob discuss their love for Bella.',
      favoriteSong: 'My Love by Sia',
      colorPaletteImage: 'https://example.com/eclipse-color-palette.jpg',
    },
    {
      title: 'Breaking Dawn - Part 1',
      date: '2011',
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Breaking_Dawn_Part_1_Poster.jpg/220px-Breaking_Dawn_Part_1_Poster.jpg',
      description: 'Bella and Edward get married and face new challenges in this first part of the final Twilight Saga film.',
      favoriteScene: 'Edward and Bellas wedding.',
      favoriteSong: 'Turning Page by Sleeping At Last',
      colorPaletteImage: 'https://example.com/breaking-dawn-part-1-color-palette.jpg',
    },
    {
      title: 'Breaking Dawn - Part 2',
      date: '2012',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_.jpg',
      description: 'Bella and Edward face their biggest challenge yet as they prepare for a final showdown with the Volturi.',
      favoriteScene: 'The final battle scene that turns out to be Alice’s vision.',
      favoriteSong: 'A Thousand Years by Christina Perri',
      colorPaletteImage: 'https://example.com/breaking-dawn-part-2-color-palette.jpg',
    },
  ];
  

const Movies = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const movie = twilightSagaMovies[currentMovieIndex];

  return (
    <>
    <div className="characters-hero">
      <h1>The Twilight Saga</h1>
    </div>
    <div className="movie-info">
  <img src={movie.poster} alt={`${movie.title} Poster`} />
  <div>
    <h2>{movie.title} ({movie.date})</h2>
    <p><strong>Description:</strong> {movie.description}</p>
    <p><strong>Favorite Scene:</strong> {movie.favoriteScene}</p>
    <p><strong>Favorite Song:</strong> {movie.favoriteSong}</p>
  </div>
</div>
<button onClick={() => setCurrentMovieIndex((prevIndex) => (prevIndex -1) % twilightSagaMovies.length)}>
    Previous Movie
  </button>
  <button onClick={() => setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % twilightSagaMovies.length)}>
    Next Movie
  </button>
  </>
  );
};

export default Movies;