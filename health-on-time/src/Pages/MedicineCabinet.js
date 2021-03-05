import React from "react";
import SearchMedication from "../Components/SearchMedication";

const MedicineCabinet = ({ medications }) => {
  return (
    <div>
      <h1>MedicineCabinet</h1>
      <SearchMedication />
    </div>
  );
};

export default MedicineCabinet;
