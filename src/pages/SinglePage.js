import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import countriesData from "../data/dataCountries";
import Error from "./Error";
import SingleCountry from "../components/SingleCountry/SingleCountry";

const SinglePage = () => {
  let { id } = useParams();
  const countryNames = Object.keys(countriesData);
  const countryName = countryNames.find((name) => name === id);
  return (
    <>
      {countriesData[countryName] ? (
        <SingleCountry data={countriesData[countryName]} />
      ) : (
        <Error />
      )}
    </>
  );
};

export default SinglePage;
