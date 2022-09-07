import styled from 'styled-components';

import MainSlider from './components/MainSlider';
import MovieSliderSection from './components/MovieSliderSection';
import TopRatedSection from './components/TopRatedSection';

const Home = () => {
  // TODO: 하단에 흰 영역 처리
  // TODO: main 사진?

  return (
    <Container>
      <Main>
        <MainSlider />

        <MainContainer>
          <MovieSliderSection sliderTitle="Now Playing" path="now_playing" />
          <MovieSliderSection sliderTitle="Upcoming" path="upcoming" />
          <TopRatedSection path="top_rated" />
        </MainContainer>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  padding: 24px 0;
`;

export default Home;
