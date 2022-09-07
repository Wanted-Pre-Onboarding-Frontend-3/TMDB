import movieAPI from 'api/movieAPI';
import { Loading } from 'components/Loading';
import { useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { makeImagePath } from 'utils/PathUtil';

import TopMainVideo from './component/TopMainVideo';


const NowPlaying = () => {
  const {ref, inView} = useInView();
  const fetchUsers = async ({pageParam = 1}) => {
    return await movieAPI.getNowPlayingMovies({
      params: {
        page: pageParam,
      }
    });
  };

  const {isLoading, data, fetchNextPage} = useInfiniteQuery(
    ['get-movie'],
    fetchUsers,
    {
      suspense:true,
      cacheTime: 1000,
      staleTime: 1000,
      getNextPageParam: (lastPage) => {
        return lastPage.page + 1;
      },
    },
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const flattenMovie = data.pages.map((item) => item.results).flat();

  return (
    <Body>
      <TopMainVideo id={flattenMovie[0].id}/>
      <PageTitle>Now Playing</PageTitle>

      <CardList>
        {flattenMovie?.map((nowPlaying) => {
          return (
            <CardItemContainer key={nowPlaying.id}>
              <LinkWrap to={`/movie/${nowPlaying.id}`}>
                <PosterBox>
                  <PosterImg
                    src={makeImagePath(nowPlaying.poster_path)}
                    alt="포스터 이미지"
                  />
                </PosterBox>
              </LinkWrap>

              <InfoBox>
                <span>개봉일 : {nowPlaying.release_date}</span>
                <TitleWrapper>
                  <h3>{nowPlaying.title}</h3>
                  <span>{nowPlaying.original_title}</span>
                </TitleWrapper>
                <RankWrapper>
                  <AiFillStar color={colors.main}/>
                  <span>{nowPlaying.vote_average}</span>
                  <span>({nowPlaying.vote_count})</span>
                </RankWrapper>
                <Overview>{nowPlaying.overview}</Overview>
              </InfoBox>
            </CardItemContainer>
          );
        })}
      </CardList>
      <div ref={ref} style={{height: '100px'}}>
        {!isLoading && <Loading/>}
      </div>
    </Body>
  );
};

const LinkWrap = styled(Link)``;

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  padding: 40px 60px;
  ${fonts.Body1}
  color: ${colors.gray6};
`;


const PageTitle = styled.h1`
  margin-bottom: 20px;
  margin-left: 10px;
  ${fonts.H1}
  color: ${colors.main};
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

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

export default NowPlaying;