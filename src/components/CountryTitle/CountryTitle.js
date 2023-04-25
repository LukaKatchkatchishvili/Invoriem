import React from "react";

const CountryTitle = ({title,text}) => {
  return (
    <>
        <div className="flex justify-between py-10">
          <h1 className="text-2xl font-bold capitalize">{title}</h1>
          <p className="w-1/2">
            {text}</p>
        </div>
    </>
  );
};

export default CountryTitle;
