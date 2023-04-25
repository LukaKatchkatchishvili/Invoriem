import React from 'react';
import {PinkFloyd} from "../../data/dataImgs";

const HomeVideo = () => {
  return (
    <section className='md:container container-sm md:!py-[100px] !py-[50px]'>
        <div>
        <h1 className='text-5xl font-bold'>We are Invoriem</h1>
        <p className='text-l md:w-[40%] w-[70%] my-5'>We fulfill international property developments</p>
      </div>
      <div>
        <video src={PinkFloyd} controls className='w-full mt-5'></video>
      </div>
    </section>
  )
}

export default HomeVideo
