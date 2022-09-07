import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const MovieChart = ({ data }) => {
  const navigation = useNavigate();

  const handleImageError = (e) => {
    e.target.src = require('assets/images/default_poster.png');
  };

  return (
    <>
      {data?.map((data, index) => (
        <TableRow
          key={data?.id}
          onClick={() => {
            navigation(`/movie/${data?.id}`);
          }}
        >
          <td>
            <Rank>{index + 1}</Rank>
          </td>
          <td>
            <article>
              <Image>
                <img
                  src={process.env.REACT_APP_IMAGE_URL + data?.poster_path}
                  alt="poster"
                  onError={handleImageError}
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
              {data?.vote_average.toFixed(1)}
            </Star>
          </td>
        </TableRow>
      ))}
    </>
  );
};

const TableRow = styled.tr`
  border: 2px solid ${colors.white};
  :hover {
    opacity: 0.5;
    transition: 0.5s;
    cursor: pointer;
  }

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

export default MovieChart;
