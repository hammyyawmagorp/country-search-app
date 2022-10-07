import React from "react";
import CountrySection from "./CountrySection";

const CountryCard = (props) => {
  const countryData = props.countryData;

  return (
    <div className="country-card">
      <h1>
        {countryData?.name?.common} {countryData?.flag}
      </h1>
      <h2>{countryData?.capital}</h2>
      <h2>{countryData?.demonyms?.eng?.f} </h2>
    </div>
  );
};

export default CountryCard;
