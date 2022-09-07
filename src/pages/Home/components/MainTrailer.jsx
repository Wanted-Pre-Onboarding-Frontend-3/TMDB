import movieAPI from 'api/movieAPI';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';
import { makeTrailerPath } from 'utils/PathUtil';

const MainTrailer = ({ idx }) => {
  const [id, setId] = useState('');

  const { data: videoData } = useQuery(
    ['get-video', id],
    () => movieAPI.getTrailerMovies({ movieId: id }),
    {
      suspense: true,
      enabled: !!id,
    },
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const getNowPlayingData = await movieAPI.getPopularMovies({
        language: 'ko-KR',
      });
      setId(getNowPlayingData.results[idx].id);
    };
    fetchUsers();
  }, [idx]);

  return (
    <Container>
      <Title>인기 상영작</Title>

      <ReactPlayer
        url={makeTrailerPath(videoData?.results[1].key)}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        controls={true}
      ></ReactPlayer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 500px;
  overflow-y: hidden;
  margin-bottom: 60px;
`;

const Title = styled.div`
  color: ${colors.main};
  ${fonts.H2};
  font-size: 2.2rem;
  margin-bottom: 1em;
`;

export default MainTrailer;
