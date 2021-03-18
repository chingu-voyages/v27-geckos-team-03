import React, {useState} from "react";
import { getBoolsFromDays } from "./helpers";
//import "./style.css";

/* TUTORIAL available at 
https://dev.to/sametweb/how-to-create-multi-step-forms-in-react-3km4

//NOTE: I had to add "type": "module", to package.json (right after "name" line) 
 GITHUB: https://github.com/sametweb/react-step-builder */
 
import {Steps, Step} from "react-step-builder";
import Step1 from "./Step1"; // check existing schedule? Confirm re-schedule if continuing.
import Step2 from './Step2';

import FinalStep from "./FinalStep"; // Confirm or back

export default function MedSchedulerMain(props) {

  const exPres = props.existingPrescription;
  console.log("19:MedSchedulerMain  props.existingPrescription: " + props.existingPrescription);
  
  // exDays: array of length 7 with booleans for each day of the week. Populated with
  // trues for existing prescription days or to false for unset days 
  const exDays = exPres ?
    getBoolsFromDays(exPres.weekdays)
    :
    Array(7).fill(false);
  
  
  const [monX, setMonX] = useState(exDays[0]);
  const [tueX, setTueX] = useState(exDays[1]);
  const [wedX, setWedX] = useState(exDays[2]);
  const [thuX, setThuX] = useState(exDays[3]);
  const [friX, setFriX] = useState(exDays[4]);
  const [satX, setSatX] = useState(exDays[5]);
  const [sunX, setSunX] = useState(exDays[6]);
  console.log("38 MedSchedMain exDays: " + exDays);

  let someHours = exPres ?
    exPres.hours
    :
    [];
  
  const [theHoursX, setTheHoursX] = useState(someHours); // init state of theHoursX
  const every = monX && tueX && wedX && thuX && friX && satX && sunX;
  
  if (every === true) console.log("40 MedSchedulerMain every is true") // CAN BE REMOVED
  else console.log("41 MedSchedulerMain every is false") 

  const [everyX, setEveryX] = useState(every); // init state everyX

  // onChange handler for input checkbox "Every day" checkbox name: everyX)
  const onChangeEveryX = () => {
    const setAllDays = (bool) => {
      setMonX(bool); setTueX(bool); setWedX(bool); setThuX(bool); 
      setFriX(bool); setSatX(bool); setSunX(bool);
    }
    if (everyX === false) {
      setEveryX(true);
      setAllDays(true);
    }
    else {
        setEveryX(false);
        setAllDays(false);
    }
  }
    
  return (
    <div className="mainFormDiv">
      <Steps>
        <Step component={Step1}
          monX={monX} setMonX={setMonX}
          tueX={tueX} setTueX={setTueX}
          wedX={wedX} setWedX={setWedX}
          thuX={thuX} setThuX={setThuX}
          friX={friX} setFriX={setFriX}
          satX={satX} setSatX={setSatX}
          sunX={sunX} setSunX={setSunX}
          everyX={everyX}
          onChangeEveryX={onChangeEveryX}
        
          cancelout={props.cancelout}
          existingPrescription={props.existingPrescription}
          chosenMed={props.chosenMed}
        />
        <Step component={Step2}
          theHoursX={theHoursX}
          setTheHoursX={setTheHoursX}
          existingPrescription={props.existingPrescription}
          cancelout={props.cancelout}
          chosenMed={props.chosenMed}
          monX={monX} tueX={tueX} wedX={wedX} thuX={thuX} friX={friX}
          satX={satX} sunX={sunX} everyX={everyX}
        />
        <Step component={FinalStep}
          cancelout={props.cancelout}
          existingPrescription={props.existingPrescription}
          chosenMed={props.chosenMed}
          monX={monX} tueX={tueX} wedX={wedX} thuX={thuX} friX={friX}
          satX={satX} sunX={sunX} everyX={everyX}
          theHoursX={theHoursX}
          deleteMedication={props.deleteMedication}
        />
      </Steps>
    </div>
  );
}

