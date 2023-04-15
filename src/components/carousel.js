import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import grooveCruise from '../images/assets/KiKOGrooveCruise.jpeg';
import djKiko from '../images/assets/DSC_5211.jpg';
import djKiko1 from '../images/assets/IMG_1003.jpg';
import djKiko2 from '../images/assets/IMG_1009.jpg';
import djKiko3 from '../images/assets/IMG_1841.jpg';

export default function Carousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div mobile={props.mobile} className="carousel">
      <Slider {...settings}>
        <div>
          <img src={djKiko3} alt="K!KO Dj'ing" title="K!KO Dj'ing" />
        </div>
        <div>
          <img src={djKiko} alt="K!KO Dj'ing" title="K!KO Dj'ing" />
        </div>
        <div>
          <img
            src={grooveCruise}
            alt="K!KO at Groove Cruise"
            title="K!KO at Groove Cruise"
          />
        </div>
        <div>
          <img src={djKiko1} alt="K!KO Dj'ing" title="K!KO Dj'ing" />
        </div>
        <div>
          <img src={djKiko2} alt="K!KO Dj'ing" title="K!KO Dj'ing" />
        </div>
      </Slider>
    </div>
  );
}
