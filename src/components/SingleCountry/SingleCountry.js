import React from "react";
import CountrySlider from "../CountrySlider/CountrySlider";
import CountryTitle from "../CountryTitle/CountryTitle";

const SingleCountry = ({ data }) => {
  console.log(data);
  const { name, mainImg, threeImgs, textSm, textL, sliderImgs } = data;
  console.log(threeImgs);
  return (
    <section className="md:container container-sm md:!py-[75px] !py-[30px]">
      <div>
        <h1 className="text-5xl font-bold capitalize">{name}</h1>
        <p className="my-3">
          Augue eget nisi, turpis vel nibh urna, ut quam odio libero.
        </p>
        <img src={mainImg} alt="mainImg" />
      </div>
      <div className="py-[50px]">
        <CountryTitle title="The Challenge" text={textL}></CountryTitle>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img src={threeImgs.first} alt="first" className="w-full" />
            <img src={threeImgs.second} alt="second" className="w-full mt-4" />
          </div>
          <div>
            <img
              src={threeImgs.third}
              alt="third"
              className="w-full h-full col-span-2"
            />
          </div>
        </div>
        <div className="p-10">
          <p className="w-1/3  block mx-auto">
            Augue eget nisi, turpis vel nibh urna, ut quam odio libero, aliquam,
            morbi proin feugiat nisl mattis enim venenatis nunc, malesuada urna,
            viverra massa lacus pellentesque lacus, tortor eleifend egestas
            vitae dignissim odio arcu nunc scelerisque nisl nunc gravida id
            egestas eros ullamcorper turpis orci id mattis ipsum sit adipiscing
          </p>
        </div>
        <CountrySlider sliderImgs={sliderImgs}></CountrySlider>
        <CountryTitle title="Outcome" text={textL}></CountryTitle>
      </div>
    </section>
  );
};

export default SingleCountry;
