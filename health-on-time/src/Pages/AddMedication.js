import React from "react";
import SearchMedication from '../Components/SearchMedication';
import { Container } from 'react-bootstrap';

const AddMedication = () => {
  return (
    <div>
      <Container>
        <h1>Add Medications</h1>
        <SearchMedication style={{ backgroundColor: "green" }}/>


      </Container>

    </div>
  );
};

export default AddMedication;
