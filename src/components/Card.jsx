import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const Card = ({ movieUrl, posterSrc, title, year, vote }) => {
  const [isShow, setIsShow] = useState(false);

  const handleImageError = (e) => {
    e.target.src = require('assets/images/default_poster.png');
  };

  return (
    <StyledLink
      to={movieUrl}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <MovieImgWrapper>
        <MovieImg
          src={posterSrc}
          alt={`${title} 포스터`}
          onError={handleImageError}
        ></MovieImg>
      </MovieImgWrapper>

      <MovieInfo isShow={isShow}>
        <Title>{title}</Title>

        <MovieInfoDetail>
          <Year>{year}</Year>

          <span>
            <AiFillStar />
            <Vote>{vote}</Vote>
          </span>
        </MovieInfoDetail>
      </MovieInfo>
    </StyledLink>
  );
};

const StyledLink = styled(Link)``;

const MovieImgWrapper = styled.div`
  width: 200px;
  height: 280px;
  position: relative;
  transform: scale(1);
  transition: 0.3s ease-out;
  border-radius: 5px;

  &:first-of-type {
    margin-left: 1.5em;
  }
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-out;
    opacity: 0.1;
  }
`;

const MovieInfo = styled.div`
  margin-left: 1.5em;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  width: 200px;
  position: absolute;
  bottom: 0;
  display: flex;
  padding: 0 0.8em 0.8em 0.8em;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 5px;
  z-index: 100;

  &:hover {
    visibility: visible;
  }
`;

const Title = styled.h4`
  color: ${colors.white};
  ${fonts.H3};
  margin-bottom: 0.6em;
`;

const MovieInfoDetail = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.main_gray};
  font-weight: bold;

  svg {
    color: ${colors.main};
    margin-right: 0.3em;
  }
`;

const Year = styled.span``;

const Vote = styled.span``;

export default Card;
