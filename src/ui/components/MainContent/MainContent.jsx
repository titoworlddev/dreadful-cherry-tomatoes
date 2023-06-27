import MovieCard from '../MovieCard/MovieCard';
import './MainContent.scss';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

export default function MainContent({ movies, page, setPage }) {
  const handlePageChangeNext = () => {
    // This is to avoid that the page goes over the limit
    // / 10 - 1 because the pagination is of 10 movies
    if (page < movies.length / 10 - 1) setPage(page + 1);
  };
  const handlePageChangePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <main className='container main-content'>
      <h1>Popular Movies</h1>

      <br />

      <section className='movie-list'>
        {movies.slice(10 * page, 10 * (page + 1)).map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </section>

      {movies.length > 10 && (
        <PaginationButtons
          quantity={movies.length / 10}
          page={page}
          pageChange={setPage}
          pageChangeNext={handlePageChangeNext}
          pageChangePrev={handlePageChangePrev}
        />
      )}
    </main>
  );
}
