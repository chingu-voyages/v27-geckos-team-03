import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import MedicationCard from "./MedicationCard";

const SearchMedication = () => {
  const [medications, setMedications] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getFDARequest = async (searchValue) => {
    const url = `https://api.fda.gov/drug/drugsfda.json?search=openfda.brand_name:"${searchValue}"`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMedications(responseJson.results[0].openfda.brand_name);
    }
  };

  useEffect(() => {
    getFDARequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <h1>Search Medication</h1>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MedicationCard medications={medications} />
    </div>
  );
};

export default SearchMedication;
