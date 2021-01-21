import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import treehouseImage1 from '../images/assets/IMG3954.jpg';
import treehouseImage2 from '../images/assets/IMG3957.jpeg';
import imageWithKoyu from '../images/assets/Kiko.jpg';
import grooveCruise from '../images/assets/KiKOGrooveCruise.jpeg';
import groundZero1 from '../images/assets/KiKOGroundZero.jpeg';
import groundZero2 from '../images/assets/KiKOGroundZero2.jpeg';

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
          <img src={groundZero1} alt="K!KO at Ground Zero" title="K!KO at Ground Zero" />
        </div>
        <div>
          <img src={grooveCruise} alt="K!KO at Groove Cruise" title="K!KO at Groove Cruise" />
        </div>
        <div>
          <img src={treehouseImage1} alt="K!KO at Treehouse" title="K!KO at Treehouse" />
        </div>
        <div>
          <img src={groundZero2} alt="K!KO at Ground Zero 2" title="K!KO at Ground Zero 2" />
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