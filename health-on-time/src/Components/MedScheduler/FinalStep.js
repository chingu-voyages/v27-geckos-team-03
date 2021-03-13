import React from "react";
import { Button } from 'react-bootstrap';

function FinalStep(props) {
  let medName = fixCapitalization(props.chosenMed.brandName);
  let fda_number = props.chosenMed.appNumber;

  let mon = props.getState('monday'); 
  let tues = props.getState('tuesday');
  let wed = props.getState('wednesday');
  let thur = props.getState('thursday');
  let fri = props.getState('friday');
  let sat = props.getState('saturday');
  let sun = props.getState('sunday');
  let every = props.getState('everyday');

  let hours = props.getState('theTimes');
  let weekdays = getDays();

  return (
    <div>
          
      <p>medName: {medName}</p>
      <p>fda_number: {fda_number}</p>
      <p>props.existingPrescription: {String(props.existingPrescription)}</p>
      <br />
      <p>everyday: {every}</p>
      <p>monday: {mon}</p>
      <p>tuesday: {tues}</p>
      <p>wednesday: {wed}</p>
      <p>thursday: {thur}</p>
      <p>friday: {fri}</p>
      <p>saturday: {sat}</p>
      <p>sunday: {sun}</p>
      <br />
      <p>hours: {hours}</p>
      <p>weekdays: {weekdays}</p>
      <p>token: {props.token}</p>

      <Button variant={'danger'} onClick={props.cancelOut}>Cancel</Button>
      <Button onClick={props.prev}>Previous</Button>
      <Button onClick={finish}>Finish</Button>

    </div>
  );

  function finish() {
    let newPrescriptionObj = {
      medName: medName,
      description: "",
      weekdays: weekdays,
      hours: hours,
      userToken: props.token
    };
    console.log(props.handleNewPrescription(newPrescriptionObj));
    
  }

  function getDays() {
    if (every)
      return [0, 1, 2, 3, 4, 5, 6];
    let days = [];
    if (mon) days.push(0);
    if (tues) days.push(1);
    if (wed) days.push(2);
    if (thur) days.push(3);
    if (fri) days.push(4);
    if (sat) days.push(5);
    if (sun) days.push(6);
    return days;
  }
}

export default FinalStep;

function fixCapitalization(words){
  return words.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ');
}