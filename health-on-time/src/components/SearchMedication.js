import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import MedicationCard from "./MedicationCard";

const SearchMedication = () => {
  const [medications, setMedications] = useState([
    {
      brandName: "Name of the medication",
      manifacturer: "Name of the manifacturer",
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
      //setMedications(responseJson.results[0].openfda.brand_name);
      //setMedications([responseJson.results]);
      console.log(responseJson.results);

      responseJson.results.forEach((e) => {
        if (!e.openfda) {
          return console.log("No openfda");
        } else {
          // console.log(
          //   e.openfda.brand_name[0],
          //   e.openfda.manufacturer_name[0],
          //   e.openfda.application_number[0]
          // );
          const nObj = {
            brandName: e.openfda.brand_name[0],
            manifacturer: e.openfda.manufacturer_name[0],
          };
          let arr = medications.concat(nObj);
          setMedications(arr);
        }
      });
    }
  };

  useEffect(() => {
    getFDARequest(searchValue);
    console.log("From use effect", medications);
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
