import { axiosInstance } from 'api/axios-instance';

const searchAPI = {
  searchAndGetMovies: async ({ params }) => {
    const { data } = await axiosInstance.get('/search/movie', { params });
    return data;
  },
};

export default searchAPI;
