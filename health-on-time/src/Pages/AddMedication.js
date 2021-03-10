import React, { useState } from "react";
import SearchMedication from '../Components/SearchMedication';
import { Container } from 'react-bootstrap';



const AddMedication = () => {
  
  const [chosenMed, setChosenMed] = useState();
  
  return (
    <div>
      <Container>
        <h1>Add Medications</h1>
        <SearchMedication setChosenMed={setChosenMed} />
        {
          chosenMed ? chosenMed.name : null
        }

      </Container>

    </div>
  );

    
};

export default AddMedication;
