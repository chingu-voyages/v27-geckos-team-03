import React, { useState, useEffect } from "react";
import SearchMedication from '../Components/SearchMedication';
import { Container } from 'react-bootstrap';
import MedSchedulerMain from '../Components/MedScheduler/MedSchedulerMain.js';



const AddMedication = ({ medications }) => {
  
  const [chosenMed, setChosenMed] = useState();
  useEffect(() => {
    if (chosenMed) {
      console.log("11: ");
      console.dir(chosenMed);
    }
  }, [chosenMed])

  return (
    <div>
      <Container>
        <h1>Add Medications</h1>
        <SearchMedication setChosenMed={setChosenMed} />
        
        { /* console.log("19 addMedication.js: " +  chosenMed.name) */}
        {chosenMed ? 
            <>
              <h3 style={{ marginBottom: "200px" }}> {chosenMed.brandName}</h3>
            <MedSchedulerMain chosenMed={chosenMed} medications={medications}/> 
            </>
          
          :
          null
        }
      </Container>

    </div>
  );

    
};

export default AddMedication;
