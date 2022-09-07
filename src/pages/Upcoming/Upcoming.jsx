import movieAPI from 'api/movieAPI';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import CardItem from './components/CardItem';

export default function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState();

  const fetchDatas = async () => {
    const getNowPlaying = await movieAPI.getUpcomingMovies({
      params: { language: 'ko' },
    });
    setUpcomingMovies(getNowPlaying.results);
    return getNowPlaying;
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <Body>
      <Container>
        <PageTitle>Up Next</PageTitle>
        <CardList>
          {upcomingMovies?.map((movie) => {
            return <CardItem key={movie.id} movie={movie} />;
          })}
        </CardList>
      </Container>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

const Container = styled.div`
  width: 100%;
  padding: 40px 60px;
  ${fonts.Body1}
  color: ${colors.gray6};
`;

const PageTitle = styled.h1`
  margin-bottom: 20px;
  margin-left: 10px;
  ${fonts.H1}
  color: ${colors.main};
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
