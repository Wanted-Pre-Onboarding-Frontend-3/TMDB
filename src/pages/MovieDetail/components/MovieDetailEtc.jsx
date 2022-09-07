import movieAPI from 'api/movieAPI';
import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import { makeTrailerPath } from '../../../utils/PathUtil';

const MovieDetailEtc = (props) => {
  const { overview, video } = props.movieData;

  const { data: videoData } = useQuery(['get-video'], () => {
    return movieAPI.getTrailerMovies({ movieId: props.pathname });
  });

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
            url={makeTrailerPath(videoData?.results[1].key)}
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
  padding-left: 1rem;
  word-break: break-all;

  h1 {
    color: ${colors.main};
    ${fonts.H1}
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p {
    ${fonts.Body1}
    color: ${colors.white};
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
    word-break: break-all;
}
`;