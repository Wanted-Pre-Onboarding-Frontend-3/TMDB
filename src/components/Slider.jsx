import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import ReactSlick, { Settings } from 'react-slick';
import styled, { css } from 'styled-components';
import { colors } from 'styles/colors';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ children }) => {
  // TODO: 슬라이더 속성값 및 전체적인 스타일링 작업
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
    prevArrow: (
      <LeftButton pos="left">
        <MdArrowBackIos />
      </LeftButton>
    ),
    nextArrow: (
      <RightButton pos="right">
        <MdArrowForwardIos />
      </RightButton>
    ),
  };

  return (
    <ReactSlick style={{ width: '100%' }} {...settings}>
      {children}
    </ReactSlick>
  );
};

const RightButton = styled.button`
  padding: 16px;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(50%, -50%);
  background-color: ${colors.white};

  &:before {
    content: initial;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: ${colors.black};
  }
`;

const LeftButton = styled.button`
  padding: 16px;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  background-color: ${colors.white};
  top: 50%;
  left: 0px;
  transform: translate(-50%, -50%);

  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

export default Slider;
