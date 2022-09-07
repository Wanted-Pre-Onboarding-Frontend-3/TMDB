import movieAPI from 'api/movieAPI';
import TopMainVideo from 'pages/NowPlaying/component/TopMainVideo';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainSlider = () => {
  const [movieId, setMovieId] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const getNowPlayingData = await movieAPI.getNowPlayingMovies({
        language: 'ko-KR',
      });
      setMovieId(getNowPlayingData.results[0].id);
    };
    fetchUsers();
  });

  return (
    <Container>
      <TopMainVideo id={movieId} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 500px;
  border: 1px solid red;
  margin-bottom: 60px;

  video {
    width: 100%;
    /* height: 400px; */
    object-fit: fill;
  }
`;

export default MainSlider;
