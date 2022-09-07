import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import AgeTag from './AgeTag';
import GenresTags from './GenresTags';

const MovieDetailHeader = (props) => {
  const {
    title,
    release_date,
    adult,
    poster_path,
    backdrop_path,
    genres,
    vote_average,
    vote_count,
    tagline
  } = props.movieData;

  const handleImageError = (e) => {
    e.target.src = require('assets/images/default_poster.png');
  };

  return (
    <Container
      style={{
        backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${backdrop_path}`,
      }}
    >
      <BgOpacityBlack />
      <PosterWrapper>
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}${poster_path}`}
          onError={handleImageError}
          alt={title}
        />
      </PosterWrapper>
      <MovieInfoWrapper>
        <h1>
          {title} ({release_date && release_date.slice(0, 4)})
        </h1>
        <ReleaseAndAge>
          {adult && <AgeTag age={'19'} />}
          <span>{release_date && release_date.replaceAll('-', '.')}</span>
        </ReleaseAndAge>
        <Genres>
          {genres &&
            genres.map((item) => {
              return <GenresTags key={item.id} name={item.name} />;
            })}
        </Genres>
        <Vote>
          <AiFillStar color={colors.main} />
          <span>{vote_average && vote_average.toFixed(1)}</span>
          <span>({vote_count}명의 평가)</span>
        </Vote>
        <Tagline>{tagline}</Tagline>
      </MovieInfoWrapper>
    </Container>
  );
};

export default MovieDetailHeader;

const Container = styled.div`
  position: relative;
  display: flex;
  word-break: break-all;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  );
`;

const PosterWrapper = styled.div`
  z-index: 3;
  padding: 2rem;

  img {
    width: 300px;
    height: 440px;
    border-radius: 0.2rem;
  }
`;

const MovieInfoWrapper = styled.div`
  z-index: 3;
  padding: 2rem;
  color: ${colors.white};

  h1 {
    ${fonts.H1}
    font-size: 2.2rem;
    color: ${colors.white};
    margin-bottom: 1rem;
  }
`;

const ReleaseAndAge = styled.div`
  margin-bottom: 3rem;
`;

const Genres = styled.div`
  margin-bottom: 2rem;
`;

const Vote = styled.div`
  ${fonts.H3}
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  span {
    padding-left: 0.4rem;
  }
`;

const Tagline = styled.div`
  ${fonts.H3}
  font-style: italic;
  opacity: 0.8;
`;
