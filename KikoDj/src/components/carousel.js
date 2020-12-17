import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="../assets/Kiko.jpg" alt="Kiko and Koyu" title="Kiko and Koyu" />
      </div>
      <div>
        <img src="../assets/IMG_3954.jpg" alt="DJ" />
      </div>
      <div>
        <img src="../assets/IMG_3954.jpg" alt="DJ" />
      </div>
      <div>
        <img src="../assets/IMG_3954.jpg" alt="DJ" />
      </div>
      <div>
        <img src="../assets/IMG_3954.jpg" alt="DJ" />
      </div>
      <div>
        <img src="../assets/IMG_3954.jpg" alt="DJ" />
      </div>
    </Slider>
  );
}