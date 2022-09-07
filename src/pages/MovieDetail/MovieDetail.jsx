import movieAPI from 'api/movieAPI';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import MovieDetailBody from './components/MovieDetailBody';
import MovieDetailHeader from './components/MovieDetailHeader';

const MovieDetail = () => {
  const id = useParams().movie_id;
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {
    isLoading,
    error,
    data: movieData,
  } = useQuery(['movie-detail'], () => {
    return movieAPI.getMovieById({
      movie_id: id,
      params: { language: 'ko-KR' },
    });
  }, {suspense: true, cacheTime: 1000,
    staleTime: 1000});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    alert('오류가 발생하였습니다.', error.message);
  }

  return (
    <Container>
      <MovieDetailHeader movieData={movieData} />
      <MovieDetailBody movieData={movieData} id={id} />
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 120px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
