import React from "react";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { toTwelveHr, fixCapitalization, getDays, getDayNames, displayArray } from './helpers';
import "../../Styles/MedScheduler.css";

function FinalStep({ prev, chosenMed, handleNewPrescription, existingPrescription, cancelOut, getState, token }) {
  let medName = fixCapitalization(chosenMed.brandName);
  let fda_number = chosenMed.appNumber;

  let mon = getState('monday');
  let tues = getState('tuesday');
  let wed = getState('wednesday');
  let thur = getState('thursday');
  let fri = getState('friday');
  let sat = getState('saturday');
  let sun = getState('sunday');
  let every = getState('everyday');

  let hours = getState('theTimes');
  let weekdays = getDays(every, mon, tues, wed, thur, fri, sat, sun);
  let dayNames = getDayNames(every, mon, tues, wed, thur, fri, sat, sun);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h6 className={'mb-4'}>Please confirm the details below and click "Finish" when ready. You may also use the "Previous" button to edit your days or times.</h6>
            <div className={"py-2 px-4 mb-4 rounded timeDisplay"} style={{ backgroundColor: "#39C0ED" }}>
              <p className={"mt-2"}>{medName} will be scheduled at the following times for these days of the week: <b>{displayArray(dayNames)}</b></p>
              <ListGroup horizontal={"sm"} className="my-2 justify-content-center">
                {getState('theTimes').map((time, index) =>
                  <ListGroup.Item className={"ml-2 mr-2 mb-2"} variant={'secondary'} key={{ time } + '.' + index}>
                    {toTwelveHr(time)}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row className={'mt-4'}>
          <Col className="text-center">
            <Button variant={'danger'} onClick={cancelOut}>Cancel</Button>
          </Col>
          <Col className="text-center">
            <Button onClick={prev}>Previous</Button>
          </Col>
          <Col className="text-center">
            <Button variant={'success'} onClick={finish}>Finish</Button>
          </Col>
        </Row>
        <Row className={"mt-5"}>
          <Col>
            <hr />
            <p>TESTING OUTPUT:</p>
            <p>medName: {medName}</p>
            <p>fda_number: {fda_number}</p>
            <p>existingPrescription: {String(existingPrescription)}</p>
            <p>hours:  [ {displayArray(hours)}]</p>
            {/* <p>weekdays: {weekdays}</p> */}
            <p>weekdays: [ {displayArray(weekdays)}]</p>
            <p>dayNames: [ {displayArray(dayNames)}]</p>
            <p>token: {token}</p>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );

  function finish() {
    let newPrescriptionObj = {
      medName: medName,
      description: "",
      weekdays: weekdays,
      hours: hours,
      userToken: token
    };
    console.log(handleNewPrescription(newPrescriptionObj));
  }
} // end function FinalStep

export default FinalStep;
