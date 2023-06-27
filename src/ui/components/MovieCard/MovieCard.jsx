import './MovieCard.scss';

export default function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <div className='movie-text'>
        <strong className='movie-title'>{movie.title}</strong>
        <div className='movie-expandible'>
          <br />
          <p className='movie-year'>{movie.releaseYear}</p>
          <br />
          <p className='movie-decription'>{movie.description}</p>
        </div>
      </div>
      <img className='movie-img' src={movie.images.posterArt.url} />
    </div>
  );
}
