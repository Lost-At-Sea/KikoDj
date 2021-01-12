import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import treehouseImage1 from '../assets/IMG_3954.jpg';
import treehouseImage2 from '../assets/IMG_3957.jpg';
import imageWithKoyu from '../assets/Kiko.jpg';

export default function Carousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 7000
  };
  return (
    <div mobile={props.mobile} className="carousel">
      <Slider {...settings} >
        <div>
          <img src={treehouseImage1} alt="K!KO at Treehouse" title="K!KO at Treehouse" />
        </div>
        <div>
          <img src={treehouseImage2} alt="K!KO at Treehouse 2" title="K!KO at Treehouse 2" />
        </div>
        <div>
          <img src={imageWithKoyu} alt="K!KO and Koyu" title="K!KO and Koyu" />
        </div>
      </Slider>
    </div>
  );
}