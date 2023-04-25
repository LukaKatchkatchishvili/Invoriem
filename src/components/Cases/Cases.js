import React from 'react';
import "../../global.css";
import {france, moroco, london, portugal} from "../../data/dataImgs";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

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
          <Link to={`/france`} target="_blank"><img src={france} alt="france"/></Link>
        </div>
        <div className='mx-2'>
          <Link to={`/moroco`} target="_blank"><img src={moroco} alt="moroco"/></Link>
        </div>
        <div className='mx-2'>
          <Link to={`/london`} target="_blank"><img src={london} alt="london"/></Link>
        </div>
        <div className='mx-2'>
          <Link to={`/portugal`} target="_blank"><img src={portugal} alt="portugal"/></Link>
        </div>
      </Slider>
    </section>
  )
}

export default Cases;