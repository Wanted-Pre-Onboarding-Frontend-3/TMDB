import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const GenresTags = (props) => {
  return <Container>{props.name}</Container>;
};

export default GenresTags;

const Container = styled.span`
  padding: 0.3rem 0.6rem;
  margin-right: 0.4rem;
  border: 1px solid ${colors.white};
  border-radius: 30px;
`;
