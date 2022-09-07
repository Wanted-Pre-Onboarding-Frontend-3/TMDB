import movieAPI from 'api/movieAPI';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import MovieDetailEtc from './components/MovieDetailEtc';
import MovieDetailHeader from './components/MovieDetailHeader';

const MovieDetail = () => {
  const [movieData, setMovieData] = useState([]);
  const pathname = useParams().movie_id;

  const fetchMovieData = async () => {
    const getMovieData = await movieAPI.getMovieById({
      movie_id: pathname,
      params: {language: 'ko-KR'},
    });
    return getMovieData;
  };

  const { isLoading, data } = useQuery('movie-detail', fetchMovieData, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess : (data)=>{
      setMovieData(data)
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <MovieDetailHeader movieData={movieData} />
      <MovieDetailEtc movieData={movieData} pathname={pathname}/>
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  margin: 0 auto;
`;
