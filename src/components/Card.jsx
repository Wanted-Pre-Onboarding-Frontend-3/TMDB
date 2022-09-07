import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const Card = ({ movieUrl, posterSrc, title, year, vote }) => {
  const [isHover, setIshover] = useState(false);

  const handleMouseEnter = () => {
    setIshover(true);
    console.log(isHover);
  };
  const handleMouseLeave = () => {
    setIshover(false);
    console.log(isHover);
  };

  return (
    <StyledLink to={movieUrl}>
      <MovieImgWrapper>
        <MovieImgFilter
          onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <MovieImg src={posterSrc} alt={`${title} 포스터`}></MovieImg>
        </MovieImgFilter>
      </MovieImgWrapper>

      <MovieInfo isHover={isHover}>
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

const StyledLink = styled(Link)`
`;

const MovieImgWrapper = styled.div`
  width: 200px;
  height: 280px;
  position: relative;
  transform: scale(1);
  transition: 0.5s ease-out;
  border-radius: 5px;

 
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-out;
  }
`;

const MovieImgFilter = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  z-index: 10;

  &:hover {
    opacity: 0.4;
  }
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const MovieInfo = styled.span`
  visibility: ${(props) => (props.isHover ? 'visible' : 'hidden')};
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  padding: 0 0.8em 0.8em 0.8em;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 5px;
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
`;
const Year = styled.span``;

const Vote = styled.span``;

export default Card;
