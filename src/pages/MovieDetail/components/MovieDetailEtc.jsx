import React from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import { fonts } from 'styles/fonts';

const MovieDetailEtc = (props) => {
  const { overview, video } = props.movieData;
  return (
    <Container>
      <div>
        <h1>Overview</h1>
        <p>{overview}</p>
      </div>
      {!video && (
        <div>
          <h1>Video</h1>
          <ReactPlayer
            url={
              'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            } // 플레이어 url
            width="960px"
            height="540px"
            playing={true}
            muted={true}
            controls={true}
          />
        </div>
      )}
    </Container>
  );
};

export default MovieDetailEtc;

const Container = styled.div`
  h1 {
    ${fonts.H1}
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
`;
