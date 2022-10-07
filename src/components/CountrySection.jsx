import React, { useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const url = "https://restcountries.com/v3.1/name/";

const CountrySection = (props) => {
  const [search, setSearch] = useState("");
  const [countryData, setCountryData] = useState(null);

  const getCountry = () => {
    axios
      .get(`${url}${search}`)
      .then((res) => {
        //return(res.data[0].name.common, res.data[0].capital[0]);
        //console.log(res.data[0].name.common, res.data[0].capital[0]);
        console.log(res.data);
        setCountryData(res.data[0]);
      })
      .catch((err) => {
        return "Offline";
      });
  };

  return (
    <div>
      <h2>Search for a Country!</h2>
      <input
        placeholder="Search for Country"
        onChange={(e) => setSearch(e.target.value)}
      />
      <br></br>
      <button onClick={getCountry}>Submit</button>
      <CountryCard countryData={countryData} />
    </div>
  );
};

export default CountrySection;
