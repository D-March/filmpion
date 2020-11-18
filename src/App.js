import React, { useEffect, useState } from 'react'
import Movie from './components/Movie';
import Brand from './components/Brand'
import TextField from '@material-ui/core/TextField';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=586cd8123925627964403e9826ff41ee&query=';

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=586cd8123925627964403e9826ff41ee&page=1';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm(' ');
    }
  };

  const handleOnChange = (e) => {

    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
      <Brand />
        <form className="search-form" onSubmit={handleOnSubmit}>
          <TextField
            type="search"
            className="search-bar"
            id="outlined-full-width"
            label="Find Films"
            style={{ margin: 8 }}
            placeholder="Search the film database..."
            margin="normal"
            helperText="Press Enter to find a film"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="subtitle"><p>Search to see a film rating, poster and title. Simply hover over the film for an overview.</p></div>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
          <Movie 
          key={movie.id}
          {...movie}/>
        )}
      </div>
    </>
  );
}

export default App;
