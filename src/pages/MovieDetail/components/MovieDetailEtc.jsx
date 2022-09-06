import React from 'react';
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
          <video autoPlay controls>
            <source src="https://youtu.be/JROht0PS8FA"></source>
          </video>
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
