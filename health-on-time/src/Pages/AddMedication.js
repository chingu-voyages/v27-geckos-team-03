import React, { useState, useEffect } from "react";
import SearchMedication from '../Components/SearchMedication';
import { Container } from 'react-bootstrap';
import MedSchedulerMain from '../Components/MedScheduler/MedSchedulerMain.js';



const AddMedication = ({ handleNewPrescription, prescriptions, token }) => {
  
  const [chosenMed, setchosenmed] = useState(); // set method passed as prop down to Medication card
  
  const [existingPrescription, setExistingPrescription] = useState(null);
  
  function cancelOut() {
    setchosenmed(null);
    setExistingPrescription(null);
  }

  // this passed as prop all the way down to MedicationCard. When its onclick is selected, check for existing 
  // prescription and set state here
  function setprescriptionexistsflag(medication){
    if (prescriptions.find(pres => pres.medication.fda_number === medication.appNumber))
      setExistingPrescription(true);
    else setExistingPrescription(false);
  }

  return (
    <div>
      <Container>
        <h1 className={"text-center"}>Add Medications</h1>
        {/* <SearchMedication setchosenmed={setchosenmed} setprescriptionexistsflag={setprescriptionexistsflag} /> */}
        
        {/* If user clicks "Add" button on a search result */}
        {chosenMed ?
          <>
            { existingPrescription === true ? <p>Warning: coninuing will remove your existing schedule for {chosenMed.brandName}</p> : null}
            { existingPrescription === false ? <p>Existing prescription is false</p> : null}
            <MedSchedulerMain
              handleNewPrescription={handleNewPrescription}
              token={token}
              cancelOut={cancelOut}
              chosenMed={chosenMed}
              existingPrescription={existingPrescription}
              />
          </>
          :
          <>
            <p>
              Here's where you can setup a schedule for any medication you take.
              By answering a few simple questions, HealthOnTime can help you stay on schedule!
            </p>
            <p className="mb-4">Enter the name of the medication you would like to schedule in the search box to begin.</p>
            <SearchMedication setchosenmed={setchosenmed} setprescriptionexistsflag={setprescriptionexistsflag} />
          </>
        }
         
      </Container>
    </div>
  );
};

export default AddMedication;
