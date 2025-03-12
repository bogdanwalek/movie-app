import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './components/MovieListHeading';
import MovieList from './components/MovieList';

function App() {

  const movies = [
    {
      "Title": "Starwars: Goretech",
      "Year": "2018",
      "imdbID": "tt9336300",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUyMjY5YjMtZTYzNS00ZjIyLTk5MDMtZmMzNGI0MWZmZDVkXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
      "Title": "MeUndies x StarWars: The Dark Side",
      "Year": "2018",
      "imdbID": "tt9414858",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
  },
  {
      "Title": "MeUndies x StarWars: The Force",
      "Year": "2018",
      "imdbID": "tt9414918",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
  },
  {
      "Title": "40 Years: StarWars & ILM",
      "Year": "2016",
      "imdbID": "tt5320598",
      "Type": "movie",
      "Poster": "N/A"
  }
  ]

  return (
    <div className="container overflow-hidden">
      <div className="row mt-4 mb-4">
        <MovieListHeading heading="Seznam filmů"></MovieListHeading>
      </div>
      <div className="row row-cols-3">
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  )
}

export default App
