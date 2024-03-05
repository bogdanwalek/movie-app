import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './components/MovieListHeading';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  
  const getMovieRequest = async (searchValue) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=aeb2b829`;
    const movieResponse = await fetch(url);
    const movieResponseJson = await movieResponse.json();

    if(movieResponseJson.Search) {
      setMovies(movieResponseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  //stringify - konverze Javascript objektu na string
  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-favourites", JSON.stringify(items));
  }

  const AddFavouriteMovie = (movie) => {
    if (favourites.includes(movie)) {
      alert("Tento film už je v Oblíbených");
    } else {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  }

  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }



  return (
    <div className="container overflow-hidden">
      <div className="row mt-4 mb-4">
        <MovieListHeading heading="Seznam filmů"></MovieListHeading>
        <SearchBox searchValue={searchValue} 
        setSearchValue={setSearchValue} />
      </div>
      <div className="row row-cols-3 g-2">
        <MovieList 
        movies={movies}
        handleFavouritesClick={AddFavouriteMovie}
        favouriteComponent={AddFavourite}
        ></MovieList>
      </div>

      <div className="row mt-4 mb-4">
        <MovieListHeading heading="Oblíbené filmy"></MovieListHeading>
      </div>
      <div className="row row-cols-3 g-2">
        <MovieList 
        movies={favourites}
        handleFavouritesClick={RemoveFavouriteMovie}
        favouriteComponent={RemoveFavourite}
        ></MovieList>
      </div>
    </div>
  );
}

export default App;
