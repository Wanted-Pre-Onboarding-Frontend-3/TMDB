import styled, { css, keyframes } from 'styled-components';

export const Skeleton = (props) => <StyledSkeleton {...props} />;

const pulse = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`;

const StyledSkeleton = styled.div`
  display: inline-block;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '100%')};
  background: ${({ translucent }) =>
    translucent
      ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
      : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
  background-size: 400% 400%;
  border-radius: ${(props) => (props.circle ? '50%' : '5px')};

  animation: ${pulse} 1.2s ease-in-out infinite;

  &::before {
    content: '\\00a0';
  }
`;
