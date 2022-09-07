import movieAPI from 'api/movieAPI';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import MovieDetailEtc from './components/MovieDetailEtc';
import MovieDetailHeader from './components/MovieDetailHeader';

const MovieDetail = () => {
  const [movieData, setMovieData] = useState([]);
  const params = useParams().movie_id;

  const fetchMovieData = async () => {
    const getMovieData = await movieAPI.getMovieById({
      movie_id: params,
      language: 'ko-KR',
    });
    return getMovieData;
  };

  const { isLoading, data } = useQuery("movie-detail", fetchMovieData, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: data => {
      console.log(data)
      setMovieData(data);
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <MovieDetailHeader movieData={movieData} />
      <MovieDetailEtc movieData={movieData} />
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
