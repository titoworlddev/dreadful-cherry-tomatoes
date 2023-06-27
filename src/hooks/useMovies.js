import axios from 'axios';

export default async function useMovies() {
  const { entries, total: totalEntries } = await axios
    .get(
      'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json'
    )
    .then(res => res.data);

  return { entries, totalEntries };
}
