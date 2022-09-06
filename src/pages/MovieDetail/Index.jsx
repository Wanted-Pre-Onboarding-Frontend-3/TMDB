import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MovieDetailEtc from './components/MovieDetailEtc';
import MovieDetailHeader from './components/MovieDetailHeader';

const Index = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/157336?api_key=efb87f555e79f7c20e42d4cb9e585e5a',
      );
      setMovieData(response.data);
    };
    fetchMovieData();
  }, []);
  return (
    <Container>
      <MovieDetailHeader movieData={movieData} />
      <MovieDetailEtc movieData={movieData} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
