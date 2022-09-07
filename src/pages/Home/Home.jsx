import styled from 'styled-components';

import MainTrailer from './components/MainTrailer';
import NowPlayingSection from './components/NowPlayingSection';
import TopRatedSection from './components/TopRatedSection';
import UpcomingSection from './components/UpcomingSection';

const Home = () => {
  const randomNum = Math.floor(Math.random() * 10);

  return (
    <Container>
      <Main>
        <MainTrailer idx={randomNum} />

        <MainContainer>
          <NowPlayingSection sliderTitle={'Now Playing'} path={'now-playing'} />
          <UpcomingSection sliderTitle={'Upcoming'} path={'upcoming'} />
          <TopRatedSection sliderTitle={'Top-rated'} path={'top-rated'} />
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
