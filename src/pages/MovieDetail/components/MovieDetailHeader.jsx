import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import AgeTag from './AgeTag';
import GenresTags from './GenresTags';

const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/original';
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
    tagline,
    ...others
  } = props.movieData;
  const posterPath = IMAGE_BASEURL + poster_path;
  const backdropPath = IMAGE_BASEURL + backdrop_path;
  return (
    <Container
      style={{
        backgroundImage: `url(${backdropPath})`,
      }}
    >
      <BgOpacityBlack />
      <PosterWrapper>
        <img src={posterPath} />
      </PosterWrapper>
      <MovieInfoWrapper>
        <h1>
          {title} ({release_date && release_date.slice(0, 4)})
        </h1>
        <div className="releaseAndAdult">
          {adult ? <AgeTag age={'19'} /> : <AgeTag age={'All'} />}
          <span> · {release_date && release_date.replaceAll('-', '.')}</span>
        </div>
        <div className="genres">
          {genres &&
            genres.map((item) => {
              return <GenresTags key={item.id} name={item.name} />;
            })}
        </div>
        <div className="vote">
          <span>⭐{vote_average && vote_average.toFixed(1)}</span>
          <span> ({vote_count}명의 평가)</span>
        </div>
        <div className="tagline">{tagline}</div>
      </MovieInfoWrapper>
    </Container>
  );
};

export default MovieDetailHeader;

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0 120px;
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
  z-index: 5;
  padding: 2rem;

  img {
    width: 360px;
    height: 500px;
    border-radius: 0.2rem;
  }
`;

const MovieInfoWrapper = styled.div`
  z-index: 6;
  padding: 2rem;
  color: ${colors.white};

  h1 {
    ${fonts.H1}
    font-size: 2.2rem;
    color: ${colors.white};
    margin-bottom: 1rem;
  }

  .releaseAndAdult {
    margin-bottom: 3rem;
  }

  .genres {
    margin-bottom: 2rem;
  }

  .vote {
    ${fonts.H3}
    margin-bottom: 3rem;
  }

  .tagline {
    ${fonts.Body1}
    font-style: italic;
    opacity: 0.8;
  }
`;
