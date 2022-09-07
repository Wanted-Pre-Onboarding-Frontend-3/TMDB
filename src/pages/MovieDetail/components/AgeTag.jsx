import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const AdultTag = (props) => {
  return <TagContainer>{props.age}</TagContainer>;
};

export default AdultTag;

const TagContainer = styled.span`
  background-color: #fff;
  padding: 0.1rem 0.8rem;
  color: ${colors.gray1};
  border-radius: 0.4rem;
  margin-right: 0.8rem;
`;
