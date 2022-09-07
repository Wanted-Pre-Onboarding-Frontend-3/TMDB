import movieAPI from 'api/movieAPI';
import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState();
  const IMAGE_BASEURL = 'https://image.tmdb.org/t/p/original';

  const fetchData = async () => {
    const getTopRated = await movieAPI.getTopRatedMovies({});
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
              {topRatedMovies?.map((data, index) => (
                <TableRow key={data?.id}>
                  <td>
                    <Rank>{index + 1}</Rank>
                  </td>
                  <td>
                    <article>
                      <Image>
                        <img
                          src={IMAGE_BASEURL + data?.poster_path}
                          alt="poster"
                        />
                      </Image>
                      <Text>
                        <MovieTitle>
                          {data?.title}
                          <span>({data?.release_date.split('-')[0]})</span>
                        </MovieTitle>
                        <OriginalTitle>{data?.original_title}</OriginalTitle>
                      </Text>
                    </article>
                  </td>
                  <td>
                    <ReleaseDate>{data?.release_date}</ReleaseDate>
                  </td>
                  <td>
                    <Star>
                      <AiFillStar color={colors.main} />
                      {data?.vote_average}
                    </Star>
                  </td>
                </TableRow>
              ))}
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

const TableRow = styled.tr`
  border: 2px solid ${colors.white};
  &:nth-child(odd) {
    background-color: #f6f6f5;
  }
  &:nth-child(even) {
    background-color: #fbfbfb;
  }
  td {
    vertical-align: middle;
    height: 100px;
    line-height: 100px;
    &:nth-child(1) {
      width: 8%;
    }
    &:nth-child(2) {
      article {
        display: flex;
      }
    }
    &:nth-child(3) {
      width: 15%;
    }
    &:nth-child(4) {
      width: 10%;
    }
  }
`;

const Rank = styled.div`
  ${fonts.H3};
`;

const Image = styled.div`
  width: 80px;
  height: 100px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  margin-left: 20px;
  text-align: left;
`;
const MovieTitle = styled.p`
  ${fonts.H3};
  line-height: 70px;
`;
const OriginalTitle = styled.p`
  ${fonts.Body2};
  color: ${colors.main_gray};
  line-height: 20px;
`;

const ReleaseDate = styled.p``;

const Star = styled.div``;

export default TopRated;
