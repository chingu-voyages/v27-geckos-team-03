import React, { useState, useContext } from "react";
import SearchMedication from '../Components/SearchMedication';
import { Container } from 'react-bootstrap';
import MedSchedulerMain from '../Components/MedScheduler/MedSchedulerMain.js';
import { UserContext } from "../Components/UserContext";


const AddMedication = () => {
  const {prescriptions} = useContext(UserContext)
  const [chosenMed, setchosenmed] = useState(); // set method passed as prop down to Medication card
  const [existingPrescription, setExistingPrescription] = useState();
  const { deleteMedication } = useContext(UserContext);

  function cancelout() {
    setchosenmed(null);
    setExistingPrescription(null);
  }

  // this passed as prop all the way down to MedicationCard. When Med Card's onclick is triggered, 
  // run this to check for existing prescription and if so set state here.
  // After this function, existingPrescription is set to existing prescription object or undefined 
  function checkprescriptionexists(medication){
    let result = prescriptions.find(pres => pres.medication.fda_number === medication.appNumber) 
    setExistingPrescription(result); 
    console.log("24 AddMedication - Setting existingPrescription :" + result);
  }

  return (
    <div>
      <Container>
        <h1 className={"text-center"}>Add Medications</h1>
        
        {/* If user clicks "Add" button on a search result, then chosenMed is set */}
        {chosenMed ?
          <>
            {
              existingPrescription ?
                <div className="px-4">
                  <h6 mt-2>We've found an existing HealthOnTime schedule for {chosenMed.brandName}. You can edit the schedule now if you wish.</h6>
                </div>
                :
                null
            }
            
            <MedSchedulerMain
              cancelout={cancelout}
              chosenMed={chosenMed}
              existingPrescription={existingPrescription}
              deleteMedication={deleteMedication}
              />
          </>
          :
          <div className="p-4">
            <h6 className="mb-3">
              Here's where you can setup a schedule for the medications you take.
              By answering a few simple questions, <i>HealthOnTime</i> can help you stay on schedule!
            </h6>
            <p className="mb-4">Enter the name of the medication you would like to schedule in the search box to begin.</p>
            <div className="col ml-sm-3 ml-md-4">
              <SearchMedication setchosenmed={setchosenmed} checkprescriptionexists={checkprescriptionexists} />
            </div>
          </div>
        }
         
      </Container>
    </div>
  );
};

export default AddMedication;
