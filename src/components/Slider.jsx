import ReactSlick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ children }) => {
  const settings = {
    lazyLoad: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
  };

  return (
    <ReactSlick style={{ width: '100%' }} {...settings}>
      {children}
    </ReactSlick>
  );
};

export default Slider;
