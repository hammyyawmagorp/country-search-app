import React from "react";
import CountrySection from "./CountrySection";

const CountryCard = (props) => {
  const countryData = props.countryData;

  return (
    <div className="country-card">
      <h3>{countryData?.name?.common}</h3>
    </div>
  );
};

export default CountryCard;
