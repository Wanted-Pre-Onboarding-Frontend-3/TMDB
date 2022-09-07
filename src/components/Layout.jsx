import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const Layout = ({ movieUrl, posterSrc, title, year, vote }) => {
  return (
    <Link to={movieUrl}>
      <MovieImgWrapper>
        <MovieImg src={posterSrc} alt={`${title} 포스터`}></MovieImg>
      </MovieImgWrapper>

      <MovieInfo>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <AiFillStar />
        <Vote>{vote}</Vote>
      </MovieInfo>
    </Link>
  );
};

const MovieImgWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const MovieInfo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Year = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const Vote = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export default Layout;
