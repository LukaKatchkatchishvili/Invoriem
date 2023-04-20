import React, { useContext } from "react";
import { HomeBg, HomeBgMd, logo, arrowRightWhite } from "../data/data.js";
import { MenuContext } from "../components/MenuContext";
import Cases from "../components/Cases/Cases";
import HomeVideo from "../components/HomeVideo/HomeVideo.js";
import Footer from "../components/Footer/Footer.js";
import "../global.css";

const Home = () => {
  const { menuActive } = useContext(MenuContext);
  return (
    <>
      <section >
        <img
          src={HomeBg}
          alt="bg"
          className="w-full -mt-[75px] -z-10 relative md:h-auto h-screen hidden md:block"
        />
        <img
          src={HomeBgMd}
          alt="bg"
          className="w-full -mt-[57px] -z-10 relative md:h-auto h-screen md:hidden block "
        />
        <div
          className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden block ${
            menuActive ? "z-1" : "-z-10"
          }`}
        >
          <img src={logo} alt="logo" className="w-60 mx-auto" />
          <p className="text-center text-[1.15rem] text-slate-500 mt-7">
            We fulfill international property developments
          </p>
        </div>
        <div className="absolute lg:top-[20%] top-[15%] left-[13.3%] md:block hidden">
          <div>
            <h1 className="block w-[65%] lg:text-5xl text-3xl font-bold text-teal leading-normal">We build dreams, not just walls</h1>
            <p className="my-10 lg:text-xl text-l">Fulfill your international property developments with us</p>
            <div>
              <button className="w-[150px] lg:text-l text-sm flex items-center border text-white font-bold border-3 p-3 py-3 bg-teal">
            Let's Talks{" "}
            <img src={arrowRightWhite} alt="arrowRight" className="w-6 ml-3 text-white mt-1" />
          </button>
            </div>
          </div>
        </div>
      </section>
      <Cases></Cases>
      <HomeVideo></HomeVideo>
      <Footer></Footer>
    </>
  );
};

export default Home;
