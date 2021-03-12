// Step1.js
import React from "react";

function Step1(props) {


  return (
    <div>
          <p>{props.chosenMed.brandName}</p>
          <p>{props.chosenMed.fda_number}</p>


      <p>Name: <input name="name" /></p>
      <p>Surname: <input name="surname" /></p>
    </div>
  );
}

export default Step1;
