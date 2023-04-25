import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CountrySlider = ({ sliderImgs }) => {
  console.log(sliderImgs);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show only one slide when screen width is 480px or less
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="md:!mt-[75px] !mt-[35px]">
        <div>
          <img src={sliderImgs.first} alt="first" className="px-4" />
        </div>
        <div>
          <img src={sliderImgs.second} alt="second" className="px-4" />
        </div>
        <div>
          <img src={sliderImgs.third} alt="third" className="px-4" />
        </div>
        <div>
          <img src={sliderImgs.fourth} alt="fourth" className="px-4" />
        </div>
        <div>
          <img src={sliderImgs.fifth} alt="fifth" className="px-4" />
        </div>
      </Slider>
    </div>
  );
};

export default CountrySlider;
