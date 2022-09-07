import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

export default function CardItem({ movie }) {
  const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/original/';
  console.log(movie);
  return (
    <CardItemContainer>
      <PosterBox>
        <PosterImg
          src={IMAGE_BASEURL.concat(movie.poster_path)}
          alt="포스터 이미지"
        />
      </PosterBox>
      <InfoBox>
        <span>(개봉 예정일 : {movie.release_date})</span>
        <TitleWrapper>
          <h3>{movie.title}</h3>
          <span>{movie.original_title}</span>
        </TitleWrapper>
        <RankWrapper>
          <AiFillStar color={colors.main} />
          <span>{movie.vote_average}</span>
          <span>({movie.vote_count})</span>
        </RankWrapper>
        <Overview>{movie.overview}</Overview>
      </InfoBox>
    </CardItemContainer>
  );
}

const CardItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.gray1};
`;

const PosterBox = styled.div``;

const PosterImg = styled.img`
  width: 132px;
  height: 185px;
  object-fit: cover;
`;

const InfoBox = styled.div`
  padding-left: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h3 {
    ${fonts.H3}
  }

  span {
    ${fonts.H3}
    color: ${colors.gray3};
  }
`;

const RankWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Overview = styled.p`
  display: block !important;
  width: 100%;
  margin-top: 20px;
  color: ${colors.gray5};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
