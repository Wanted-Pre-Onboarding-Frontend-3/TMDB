import movieAPI from 'api/movieAPI';
import { Loading } from 'components/Loading';
import _ from 'lodash';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import CardItem from './components/CardItem';

export default function Upcoming() {
  const { ref, inView } = useInView();

  const fetchDatas = async ({ pageParam = 1 }) => {
    const UpcomingMoviePage = await movieAPI.getUpcomingMovies({
      params: { language: 'ko', page: pageParam },
    });

    return UpcomingMoviePage;
  };

  const { isLoading, data, fetchNextPage } = useInfiniteQuery(
    ['upcoming'],
    fetchDatas,
    {
      suspense: true,
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

  const flattenMovie = _.flatten(data?.pages.map((item) => item.results));

  return (
    <Container>
      <PageTitle>Up Next</PageTitle>
      <CardList>
        {flattenMovie?.map((movie) => {
          return <CardItem key={movie.id} movie={movie} />;
        })}
      </CardList>
      <div ref={ref} style={{ height: '100px' }}>
        {!isLoading && <Loading />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
