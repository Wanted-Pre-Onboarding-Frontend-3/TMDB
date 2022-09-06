import Layout from 'components/Layout';
import { useState } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const NowPlaying = () => {
  const [isLoading, setIsLoading] = useState(false);

  const nowPlayingSlider = <Layout></Layout>;

  return (
    <Container>
      <Title>Now Playing</Title>

      {isLoading ? <div>Loading...</div> : nowPlayingSlider}
    </Container>
  );
};

const Container = styled.section``;

const Title = styled.h2`
  ${fonts.H2};
  color: ${colors.main};
`;

export default NowPlaying;
