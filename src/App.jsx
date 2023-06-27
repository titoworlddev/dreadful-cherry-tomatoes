import { useEffect, useState } from 'react';
import Header from './ui/components/Header/Header';
import SearchBar from './ui/components/SearchBar/SearchBar';
import MainContent from './ui/components/MainContent/MainContent';
import './App.scss';
import Footer from './ui/components/Footer/Footer';
import useMovies from './hooks/useMovies';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [movieTitle, setMovieTitle] = useState('');

  const getMovies = async () => {
    await useMovies().then(res => {
      setMovies(res.entries.sort((a, b) => b.releaseYear - a.releaseYear));
    });
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const handleSearch = async e => {
    e.preventDefault();

    await useMovies().then(res => {
      setMovies(
        res.entries
          .sort((a, b) => b.releaseYear - a.releaseYear)
          .filter(movie =>
            movie.title
              .toLowerCase()
              .includes(e.target.movieTitle.value.toLowerCase())
          )
      );
    });
  };

  const handleClearSearch = async () => {
    const titleInput = document.getElementById('movieTitle');
    titleInput.value = '';
    setMovieTitle('');

    await useMovies().then(res => {
      setMovies(res.entries.sort((a, b) => b.releaseYear - a.releaseYear));
    });
  };

  return (
    <>
      <Header />

      <SearchBar
        onSubmit={handleSearch}
        clearSearch={handleClearSearch}
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
      />

      <MainContent movies={movies} page={page} setPage={setPage} />

      <Footer />
    </>
  );
}
