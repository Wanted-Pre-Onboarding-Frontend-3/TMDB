import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/colors';

const AdultTag = (props) => {
  return <TagContainer>{props.age}</TagContainer>;
};

export default AdultTag;

const TagContainer = styled.span`
  background-color: #fff;
  padding: 1px 10px;
  color: ${colors.gray1};
  border-radius: 5px;
`;
