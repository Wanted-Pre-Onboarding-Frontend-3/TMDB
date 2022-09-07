import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import movieAPI from '../../api/movieAPI';
import { Loading } from '../../components/Loading';
import { makeImagePath } from '../../utils/PathUtil';
import TopMainVideo from './component/TopMainVideo';

export const NowPlaying = () => {
  const { ref, inView } = useInView();
  const [firstMovieId, setFirstMovieId] = useState();

  const fetchUsers = async ({ pageParam = 1 }) => {
    const getNowPlaying = await movieAPI.getNowPlayingMovies({
      page: pageParam,
    });
    setFirstMovieId(getNowPlaying.results[0].id);
    return getNowPlaying;
  };

  const { isLoading, data, fetchNextPage } = useInfiniteQuery(
    ['projects'],
    fetchUsers,
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.page + 1;
      },
    },
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <div>test</div>;
  }

  const flattenMovie = _.flatten(data.pages.map((item) => item.results));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <RootWrap>
          <TopMainVideo id={firstMovieId} />
          <TopInfoContainer>
            <TopInfoWrap>
              <SpaceWrap></SpaceWrap>
              <PosterWrap>포스터</PosterWrap>
              <TitleWrap>영화제목</TitleWrap>
              <ReleaseDateWrap>개봉일</ReleaseDateWrap>
              <RateWrap>평점</RateWrap>
            </TopInfoWrap>
          </TopInfoContainer>
          <NowPlayingListWrap>
            {flattenMovie?.map((nowPlaying, index) => {
              return (
                <DivWrap key={index}>
                  <IndexWrap>{index + 1}</IndexWrap>
                  <LinkWrap to={`/`}>
                    <ImageWrap bgimg={makeImagePath(nowPlaying.poster_path)} />
                  </LinkWrap>
                  <DetailBox>
                    <TitleBox>{nowPlaying.title}</TitleBox>
                    <Date>{nowPlaying.release_date}</Date>
                    <AverageWrap>⭐{nowPlaying.vote_average}</AverageWrap>
                  </DetailBox>
                </DivWrap>
              );
            })}
          </NowPlayingListWrap>
          <div ref={ref} style={{ height: '100px' }}>
            {!isLoading && <Loading />}
          </div>
        </RootWrap>
      )}
    </>
  );
};

const RootWrap = styled.div`
  margin: 0 auto;
`;
const TopInfoContainer = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 20px;
`;
const TopInfoWrap = styled.div`
  padding: 0 12px;
  display: flex;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 55%;
`;
const PosterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  max-width: 100px;
`;
const SpaceWrap = styled.div`
  margin: 20px;
`;
const ReleaseDateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 35%;
`;
const RateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 10%;
`;
const NowPlayingListWrap = styled.div`
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid gainsboro;
`;

const DivWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  &&:nth-child(even) {
    background-color: gainsboro;
  }
`;

const LinkWrap = styled(Link)`
  width: 100%;
  height: 100%;
  min-height: 150px;
  max-width: 100px;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${(prop) => prop.bgimg});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  min-height: 150px;
  max-width: 100px;
`;

const DetailBox = styled.div`
  display: flex;
  flex: 1;
`;

const TitleBox = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 55%;
  align-items: center;
  justify-content: center;
  word-break: keep-all;
  padding: 0 16px;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 35%;
  word-break: keep-all;
  padding: 0 16px;
`;

const AverageWrap = styled.div`
  display: flex;
  flex-basis: 10%;
  align-items: center;
  justify-content: flex-end;
`;

const IndexWrap = styled.div`
  padding: 20px;
`;
