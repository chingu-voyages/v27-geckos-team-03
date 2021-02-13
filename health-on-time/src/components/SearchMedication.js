import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import MedicationCard from "./MedicationCard";

const SearchMedication = () => {
  const [medications, setMedications] = useState([
    {
      brandName: "Name of the medication",
      manifacturer: "Name of the manifacturer",
      appNumber: "FDA APP number",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");

  const getFDARequest = async (searchValue) => {
    const url = `https://api.fda.gov/drug/drugsfda.json?search=openfda.brand_name:"${searchValue}"&limit=5`;
    //const url = `https://api.fda.gov/drug/drugsfda.json?search=openfda.generic_name%22methadone%22&limit=5`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      console.log(responseJson.results);
      responseJson.results.forEach((e) => {
        if (!e.openfda) {
          return;
        } else {
          console.log(e.openfda.manufacturer_name[0]);
          const nObj = {
            brandName: e.openfda.brand_name[0],
            manifacturer: e.openfda.manufacturer_name[0],
            appNumber: e.openfda.application_number[0],
          };
          let arr = medications.concat(nObj);
          setMedications(arr);
        }
      });
    }
  };

  useEffect(() => {
    getFDARequest(searchValue);
  }, [searchValue]);

  return (
    <div style={{ margin: "10rem 0" }}>
      <h1>Search Medication</h1>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MedicationCard medications={medications} />
    </div>
  );
};

export default SearchMedication;
