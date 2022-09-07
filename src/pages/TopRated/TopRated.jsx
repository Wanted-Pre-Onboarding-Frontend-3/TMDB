import movieAPI from 'api/movieAPI';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

import MovieChart from './components/MovieChart';

function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState();

  const fetchData = async () => {
    const getTopRated = await movieAPI.getTopRatedMovies({
      params: { language: 'ko-KR' },
    });
    setTopRatedMovies(getTopRated.results);
    return getTopRated;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
              <MovieChart data={topRatedMovies} />
            </TableBody>
          </Table>
        </MovieList>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${colors.black};
`;
const Content = styled.section`
  width: 1000px;
  background-color: ${colors.white};
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
