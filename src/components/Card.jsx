import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ movieUrl, posterSrc, title, year, vote }) => {
  return (
    <StyledLink to={movieUrl}>
      <MovieImgWrapper>
        <MovieImg src={posterSrc} alt={`${title} 포스터`}></MovieImg>
      </MovieImgWrapper>

      <MovieInfo>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <AiFillStar />
        <Vote>{vote}</Vote>
      </MovieInfo>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: block;
`;

const MovieImgWrapper = styled.div`
  width: 200px;
  height: 280px;
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const MovieInfo = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h4`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Year = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Vote = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export default Card;
