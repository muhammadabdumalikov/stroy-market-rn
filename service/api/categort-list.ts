export const fetchWatchlistMovies = async () => {
  
  const url =
    'http://192.168.50.225:3000/v1/customers/artists/public/find';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      limit: 1000
    }),
  };

  const res = await fetch(url, options);
  console.log(2222, res);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  
  const json = await res.json();

  return json;
};

export const addMovieToWatchList = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/21050033/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjhhMTE5YzAzODNlNWUxM2VkODQxNjY4ZWRlNzU4MiIsInN1YiI6IjY1ZTFlN2FhNDFhNTYxMDE4Njg0MGVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UJVtqRNQ-1QFfb4733gzUQ5VgFYFj1Iimk_1GvDwSMo',
    },
    body: JSON.stringify({
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    }),
  };

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  const json = await res.json();
  return json;
};