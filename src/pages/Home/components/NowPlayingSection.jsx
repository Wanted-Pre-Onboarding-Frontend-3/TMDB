import movieAPI from 'api/movieAPI';
import Card from 'components/Card';
import Slider from 'components/Slider';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';
import { PREFIX, getYear } from 'utils/HomeUtil';

const NowPlayingSection = ({ sliderTitle, path }) => {
  const [nowPlayingData, setNowPlayingData] = useState([]);

  const fetchNowPlayingData = async () => {
    const getNowPlayingData = await movieAPI.getNowPlayingMovies({
      language: 'ko-KR',
    });
    return getNowPlayingData;
  };

  const { isLoading, data } = useQuery('now-playing', fetchNowPlayingData, {
    suspense: true,
  });

  useEffect(() => {
    setNowPlayingData(data.results);
  }, [data.results]);

  const nowPlayingSlider = (
    <Slider>
      {nowPlayingData?.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          posterSrc={`${PREFIX}/${movie.poster_path}`}
          movieUrl={`/movie/${movie.id}`}
          year={getYear(movie.release_date)}
          vote={movie.vote_average}
        ></Card>
      ))}
    </Slider>
  );

  return (
    <Container>
      <TitleWrapper>
        <Title>{sliderTitle}</Title>
        <StyledLink to={path}>더보기</StyledLink>
      </TitleWrapper>

      {isLoading ? <div>Loading...</div> : nowPlayingSlider}
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

export default NowPlayingSection;
