import LeftChevron from '../Icons/LeftChevron/LeftChevron';
import RightChevron from '../Icons/RightChevron/RightChevron';
import './PaginationButtons.scss';

export default function PaginationButtons({
  quantity,
  page,
  pageChange,
  pageChangeNext,
  pageChangePrev,
  limit = 5
}) {
  // This functions are used to calculate the start and end of the pagination buttons and allow that the showed buttons are always the limit (5 by default)
  const start = () => {
    if (page < limit / 2) return 0;
    if (page > quantity - limit / 2) return quantity - limit;
    return page - Math.floor(limit / 2);
  };
  const end = () => {
    if (page < limit / 2) return limit;
    if (page > quantity - limit / 2) return quantity;
    return page + Math.ceil(limit / 2);
  };

  return (
    <div className='pagination-buttons'>
      <button className='chevron-button' onClick={pageChangePrev}>
        <LeftChevron />
      </button>

      {Array.from({ length: quantity }, (_, i) => i + 1)
        .slice(start(), end())
        .map(number => (
          <button
            key={number}
            className={`pagination-buttons__button ${
              page === number - 1 && 'active'
            }`}
            onClick={() => pageChange(number - 1)}
          >
            {number}
          </button>
        ))}

      <button className='chevron-button' onClick={pageChangeNext}>
        <RightChevron />
      </button>
    </div>
  );
}
