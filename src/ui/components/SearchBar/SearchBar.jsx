import SearchIcon from '../Icons/SearchIcon';
import './SearchBar.scss';

export default function SearchBar({
  onSubmit,
  movieTitle,
  setMovieTitle,
  clearSearch
}) {
  return (
    <div className='container search-bar'>
      <form className='search-form' onSubmit={onSubmit}>
        <button className='submit-button' type='submit'>
          <SearchIcon />
        </button>
        <input
          onInput={e => {
            setMovieTitle(e.target.value);
          }}
          type='text'
          id='movieTitle'
          name='movieTitle'
          autoComplete='off'
          placeholder='Title'
        />
        {movieTitle !== '' && (
          <button className='clear-button' onClick={clearSearch}>
            ✖️
          </button>
        )}
      </form>
    </div>
  );
}
