import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fonts } from 'styles/fonts';

const TopRatedItem = ({ id, title, year, vote, movieUrl }) => {
  // TODO: grid 공백 맞추기
  // TODO: 넘버링

  const navigate = useNavigate();

  return (
    <Item onClick={() => navigate(movieUrl)}>
      <div>
        <Number>{id + 1}</Number>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </div>

      <div>
        <AiFillStar />
        <span>{vote.toFixed(1)}</span>
      </div>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7em 1em;
  color: ${colors.white};
  background-color: ${colors.sub_gray};
  border-radius: 3px;
  cursor: pointer;

  svg {
    color: ${colors.main};
    margin-right: 0.4em;
  }

  &:hover {
    background-color: ${colors.main_gray};
    color: ${colors.sub_gray};
    transform: scale(1.02);
    transition: 0.2s ease-out;
  }
`;

const Number = styled.span`
  display: inline-block;
  width: 25px;
  ${fonts.H3};
`;

const Title = styled.span`
  margin-left: 1em;
  font-weight: bold;
`;

const Year = styled.span`
  margin-left: 1em;
  color: ${colors.main_gray};
`;

export default TopRatedItem;
