import movieAPI from 'api/movieAPI';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';
import { getYear } from 'utils/HomeUtil';

import TopRatedItem from './TopRatedItem';

const TopRatedSection = ({ sliderTitle, path }) => {
  const [topRatedData, setTopRatedData] = useState([]);

  const fetchTopRatedData = async () => {
    const getTopRatedData = await movieAPI.getTopRatedMovies({
      language: 'ko-KR',
    });
    return getTopRatedData;
  };

  const { isLoading, data } = useQuery('upcoming', fetchTopRatedData, {
    suspense: true,
  });

  useEffect(() => {
    setTopRatedData(data.results);
  }, [data.results]);

  const ListSection = (
    <TopRatedWrapper>
      {topRatedData?.map((movie, index) => (
        <TopRatedItem
          key={movie.id}
          id={index}
          title={movie.title}
          movieUrl={`/movie/${movie.id}`}
          year={getYear(movie.release_date)}
          vote={movie.vote_average}
        ></TopRatedItem>
      ))}
    </TopRatedWrapper>
  );

  return (
    <Container>
      <TitleWrapper>
        <Title>{sliderTitle}</Title>
        <StyledLink to={path}>더보기</StyledLink>
      </TitleWrapper>

      <TopRatedContainer>
        {isLoading ? <div>Loading...</div> : ListSection}
      </TopRatedContainer>
    </Container>
  );
};

const Container = styled.article`
  margin-bottom: 6em;
`;

const TitleWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  ${fonts.H2};
  color: ${colors.main};
  margin-bottom: 0.6em;
`;

const StyledLink = styled(Link)`
  color: ${colors.main_gray};
  font-weight: bold;
  line-height: 40px;
`;

const TopRatedContainer = styled.section`
  display: flex;
`;

const TopRatedWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  gap: 10px 28px;
`;

export default TopRatedSection;
