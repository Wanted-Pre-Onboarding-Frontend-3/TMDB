import { AiOutlineToTop } from 'react-icons/ai';
import styled from 'styled-components';
import { colors } from 'styles/colors';

export default function ScrollTop({ isScrolledDown }) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <ScrollTopButton isScrolledDown={isScrolledDown} onClick={handleScrollTop}>
      <AiOutlineToTop />
    </ScrollTopButton>
  );
}

const ScrollTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  font-size: 40px;
  position: fixed;
  bottom: 198px;
  right: 30px;
  border: 3px solid;
  border-radius: 50%;
  color: ${colors.white};
  background-color: ${colors.sub_gray};
  opacity: ${({ isScrolledDown }) => (isScrolledDown ? 0.5 : 0)};
  transition: all 0.3s;

  &:hover {
    opacity: ${({ isScrolledDown }) => (isScrolledDown ? 1 : 0)};
  }
`;
