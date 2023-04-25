import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { MenuContext } from "../MenuContext";
import { logo, arrowRight, menu,facebook,instagram,twitter,linkedin } from "../../data/dataImgs";
import "../../global.css";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { menuActive, setMenuActive } = useContext(MenuContext);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768 && menuActive) {
        setMenuActive(false);
      }
      if (window.innerWidth >= 768) {
        setMenuActive(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuActive, setMenuActive]);
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    }
  }, [menuActive]);

  return (
    <section className="flex items-center justify-between md:container container-sm z-1 p-5">
      <div
        className={`sidebar absolute w-full top-0 left-0 transition-transform duration-500 ease-in translate bg-white z-10 h-screen ${
          menuActive ? "translate-x-0" : "translate-x-[200%]"
        }`}
      >
        <div className="w-[60%] pt-[15vh] px-10 pb-">
          <h1 className="text-4xl font-bold leading-normal">
            Hello Bonjour Olá Marhabaan
          </h1>
          <h1 className="text-2xl font-bold mt-[10vh] mb-[5vh]">Contact us</h1>
          <ul className="">
            <li className="my-4">info@invoriem.com</li>
            <li className="my-4">+555 1234 52 58</li>
            <li className="my-4 w-3/5">3517 W. Gray St. Utica, Pennsylvania 57867</li>
          </ul>
  
        </div>
        <div className="text-center mt-[10vh]">
            <p>info@invoriem.com</p>
            <div className="flex justify-between w-1/4 mx-auto my-5">
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
            </div>
            <p>Copyright © 2020 Invoriem</p>
          </div>
      </div>
      <div className="logo p-5 z-10 block">
        <Link to={`/`}><img src={logo} alt="logo" className="md:w-auto w-24 z-50" /></Link>
      </div>

      <div className="menu block md:hidden z-10">
        <img src={menu} alt="menu" onClick={() => setMenuActive(!menuActive)} />
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center text-teal">
          <li className="p-1 m-2">About us</li>
          <li className="flex items-center border border-black border-3 p-2 px-3 ml-10">
            Let's Talks{" "}
            <img src={arrowRight} alt="arrowRight" className="w-6 ml-3" />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
