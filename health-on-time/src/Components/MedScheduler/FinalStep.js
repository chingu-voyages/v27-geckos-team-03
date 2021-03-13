import React from "react";

function FinalStep(props) {
  return (
    <div>
          <p>props.getState('chosenMed').brandName: {props.getState('chosenMed').brandName}</p>
          <p>props.getState('chosenMed').appNumber: {props.getState('chosenMed').appNumber}</p> 
      <p>Email:</p>
      <p>Phone:</p>
    </div>
  );
}

export default FinalStep;