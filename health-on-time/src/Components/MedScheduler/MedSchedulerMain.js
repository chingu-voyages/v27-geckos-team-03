import React from "react";
//import "./style.css";

/* TUTORIAL available at 
https://dev.to/sametweb/how-to-create-multi-step-forms-in-react-3km4

//NOTE: I had to add "type": "module", to package.json (right after "name" line) 
 GITHUB: https://github.com/sametweb/react-step-builder */
 
import {Steps, Step} from "react-step-builder";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import EveryDay2 from "./EveryDay2";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

import FinalStep from "./FinalStep";
import '../../Styles/MCForm.css';
//import { propTypes } from "react-bootstrap/esm/Image";

export default function MCFormMain(props) {

  //const [weeklyTimes, setWeeklyTimes] = React.useState([]);
  
  return (
    <div className="mainFormDiv">
      <Steps>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
        <Step component={EveryDay2} />
        <Step component={Monday} />
        <Step component={Tuesday} />
        <Step component={Wednesday} />
        <Step component={Thursday} />
        <Step component={Friday} />
        <Step component={Saturday} />
        <Step component={Sunday} />
        <Step component={FinalStep} /> 
      </Steps>
    </div>
  );
}

