import React from 'react';
import ReactPlayer from 'react-player';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import movieAPI from '../../../api/movieAPI';
import { makeTrailerPath } from '../../../utils/PathUtil';

const TopMainVideo = (props) => {
  const { id } = props;

  const { data: videoData } = useQuery(['get-video'], () => {
    return movieAPI.getTrailerMovies({ movieId: id });
  });

  return (
    <RootWrap>
      <ReactPlayer
        url={makeTrailerPath(videoData?.results[1].key)}
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="100%"
      />
    </RootWrap>
  );
};

const RootWrap = styled.div``;

export default TopMainVideo;
