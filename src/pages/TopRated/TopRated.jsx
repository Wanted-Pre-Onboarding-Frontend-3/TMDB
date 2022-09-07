import movieAPI from 'api/movieAPI';
import { Loading } from 'components/Loading';
import _ from 'lodash';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import MovieChart from './components/MovieChart';

function TopRated() {
  const { ref, inView } = useInView();

  const fetchData = async ({ pageParam = 1 }) => {
    const getTopRated = await movieAPI.getTopRatedMovies({
      params: { language: 'ko-KR', page: pageParam },
    });
    return getTopRated;
  };

  const { isLoading, data, fetchNextPage } = useInfiniteQuery(
    ['top-rated'],
    fetchData,
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
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <div>test</div>;
  }

  const flattenMovie = _.flatten(data?.pages.map((item) => item.results));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Content>
            <Title>
              <SubText>WantedMDb Charts</SubText>
              <MainText>Movie Top 20</MainText>
            </Title>
            <MovieList>
              <Table>
                <TableHead>
                  <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                    <th>별점</th>
                  </tr>
                </TableHead>
                <TableBody>
                  <MovieChart data={flattenMovie} />
                </TableBody>
              </Table>
            </MovieList>
            <div ref={ref} style={{ height: '100px' }}>
              {!isLoading && <Loading />}
            </div>
          </Content>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;
const Content = styled.section`
  width: 1000px;
  background-color: ${colors.white};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  padding: 20px;
`;
const SubText = styled.p``;
const MainText = styled.p`
  ${fonts.H1};
`;

const MovieList = styled.div``;

const Table = styled.table`
  margin-top: 40px;
  width: 100%;
  td {
    text-align: center;
  }
`;

const TableHead = styled.thead`
  color: ${colors.main_gray};
  line-height: 40px;
`;
const TableBody = styled.tbody``;

export default TopRated;
