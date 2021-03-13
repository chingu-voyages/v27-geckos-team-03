import React from "react";

function FinalStep(props) {
  return (
    <div>
          <p>props.chosenMed.brandName: {props.chosenMed.brandName}</p>
          <p>props.getState('chosenMed').appNumber: {props.chosenMed.appNumber}</p> 
          <p>props.existingPrescription: {String(props.existingPrescription)}</p>
          <p>everyday: {String(props.getState('everyday'))}</p>
          <p>monday: {String(props.getState('monday'))}</p>
          <p>tuesday: {String(props.getState('tuesday'))}</p>
          <p>wednesday: {String(props.getState('wednesday'))}</p>
          <p>thursday: {String(props.getState('thursday'))}</p>
          <p>friday: {String(props.getState('friday'))}</p>
          <p>saturday: {String(props.getState('saturday'))}</p>
          <p>sunday: {String(props.getState('sunday'))}</p>
          <button onClick={props.cancelOut}>Cancel</button>
          <button onClick={props.prev}>Previous</button>

      </div>
  );
}

export default FinalStep;