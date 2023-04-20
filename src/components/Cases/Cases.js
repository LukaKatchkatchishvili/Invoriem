import React from 'react';
import "../../global.css";
import {france, moroco, london, portugal} from "../../data/data";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cases = () => {

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
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1 // Show only one slide when screen width is 480px or less
      }
    }
  ]
};

  return (
    <section className='md:container container-sm md:!py-[100px] !py-[50px]'>
      <div>
        <h1 className='text-5xl font-bold'>Case Studies</h1>
        <p className='text-l md:w-[40%] w-[70%] my-5'>We deliver a unique and truly bespoke approach to delivering international developments to market, with over 10 years success around the world.</p>
      </div>
      <Slider {...settings} className="md:!mt-[75px] !mt-[35px]">
        <div className='mx-2'>
          <img src={france} alt="france" />
        </div>
        <div className='mx-2'>
          <img src={moroco} alt="moroco"/>
        </div>
        <div className='mx-2'>
          <img src={london} alt="london"/>
        </div>
        <div className='mx-2'>
          <img src={portugal} alt="portugal"/>
        </div>
      </Slider>
    </section>
  )
}

export default Cases;