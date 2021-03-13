// Step1.js
import React from "react";

function Step1(props) {
 

  function validate() {
    // check props.getState('chosenMed') is set
    // or just set it
    // make sure user chose some days of the week
     props.setState('chosenMed', props.chosenMed.brandName);
  }

  return (
    <div>
          <p> {props.chosenMed.brandName}</p>
          <p>10 Step1.js {props.chosenMed.appNumber}</p>


      <p>Name: <input name="name" /></p>
      <p>Surname: <input name="surname" /></p>
      <button onClick={() => props.next()}>Next</button>
      <button onClick={() => props.prev()}>Previous</button>
    </div>
  );
}

export default Step1;
