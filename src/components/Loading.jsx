import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Loading = (props) => {
  return (
    <RootWrap>
      <DotWrap {...props} />
      <DotWrap {...props} />
      <DotWrap {...props} />
    </RootWrap>
  );
};

const loadingAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  15% {
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`;

export const RootWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotWrap = styled.div`
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;

  animation: ${loadingAnimation} 0.9s ease-out infinite;

  &:not(:first-of-type) {
    margin-left: 8px;
  }

  &:nth-child(1) {
    animation-delay: -0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.1s;
  }
`;
