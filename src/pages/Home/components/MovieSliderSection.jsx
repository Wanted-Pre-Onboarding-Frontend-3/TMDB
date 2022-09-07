import axios from 'axios';
import Card from 'components/Card';
import Slider from 'components/Slider';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const MovieSlider = ({ sliderTitle, path }) => {
  // TODO: api 설정 로직 변경
  // TODO: api 로직 변경 => isLoading 설정

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async (path) => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/movie/${path}?api_key=${process.env.REACT_APP_API_KEY}`,
      );
      setMovieData(response.data.results);
    };
    fetchMovieData(path);
  }, []);

  const getYear = (release_date) => release_date.split('-')[0];

  const SliderSection = (
    <Slider>
      {movieData?.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          posterSrc={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
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
        <StyledLink to={`/${path}`}>더보기</StyledLink>
      </TitleWrapper>

      <NowPlayingWrapper>
        {SliderSection}
        {/* {isLoading ? <div>Loading...</div> : SliderSection} */}
      </NowPlayingWrapper>
    </Container>
  );
};

const Container = styled.article`
  margin-bottom: 4em;
`;

const TitleWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: ${colors.main_gray};
  font-weight: bold;
`;

const NowPlayingWrapper = styled.section`
  display: flex;
`;

const Title = styled.h2`
  ${fonts.H2};
  color: ${colors.main};
  margin-bottom: 0.6em;
`;

export default MovieSlider;
