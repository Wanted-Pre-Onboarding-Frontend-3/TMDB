import { axiosInstance } from 'api/axios-instance';

const movieAPI = {
  getPopularMovies: async ({ params }) => {
    const { data } = await axiosInstance.get('/movie/popular', { params });
    return data;
  },
  getNowPlayingMovies: async ({ params }) => {
    const { data } = await axiosInstance.get('/movie/now_playing', { params });
    return data;
  },
  getTrailerMovies: async ({ movieId, params }) => {
    const { data } = await axiosInstance.get(`/movie/${movieId}/videos`, {
      params,
    });
    return data;
  },
  getUpcomingMovies: async ({ params }) => {
    const { data } = await axiosInstance.get('/movie/upcoming', { params });
    return data;
  },
  getTopRatedMovies: async ({ params }) => {
    const { data } = await axiosInstance.get('/movie/top_rated', { params });
    return data;
  },
  getMovieById: async ({ movie_id, params }) => {
    const { data } = await axiosInstance.get(`/movie/${movie_id}`, { params });
    return data;
  },
};

export default movieAPI;
