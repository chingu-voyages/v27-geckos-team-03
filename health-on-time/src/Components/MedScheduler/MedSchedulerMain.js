import React from "react";

//import "./style.css";

/* TUTORIAL available at 
https://dev.to/sametweb/how-to-create-multi-step-forms-in-react-3km4

//NOTE: I had to add "type": "module", to package.json (right after "name" line) 
 GITHUB: https://github.com/sametweb/react-step-builder */
 
import {Steps, Step} from "react-step-builder";
import Step1 from "./Step1"; // check existing schedule? Confirm re-schedule if continuing.
//import Step2 from "./Step2"; // What days
//import Step3 from "./Step3"; // What hours
//import EveryDay2 from "./EveryDay2"; // Accontability

import FinalStep from "./FinalStep"; // Confirm or back
//import '../../Styles/MCForm.css';
//import { propTypes } from "react-bootstrap/esm/Image";

export default function MedSchedulerMain(props) {

  console.log("MedSchedulerMain.js line 23");

  return (
    <div className="mainFormDiv">
      <h1>{props.chosenMed.brandName}</h1> {/* the brand name */}
      <Steps chosenMed={props.chosenMed}>
        <Step component={Step1}
          cancelOut={props.cancelOut}
          existingPrescription={props.existingPrescription}
          chosenMed={props.chosenMed}
          medications={props.medications} />
        <Step component={FinalStep}
          cancelOut={props.cancelOut}
          existingPrescription={props.existingPrescription}
          chosenMed={props.chosenMed}
          medications={props.medications}
        />
      </Steps>
    </div>
  );
}

