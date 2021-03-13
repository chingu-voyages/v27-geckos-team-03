import React from "react";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { toTwelveHr, fixCapitalization, getDays, getDayNames, displayArray } from './helpers';

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
          
      <p>medName: {medName}</p>
      <p>fda_number: {fda_number}</p>
      <p>existingPrescription: {String(existingPrescription)}</p>
      <br />

      <p>hours:  [ {displayArray(hours)}]</p>
      {/* <p>weekdays: {weekdays}</p> */}
      <p>weekdays2: [ {displayArray(weekdays)}]</p>
      <p>dayNames: [ {displayArray(dayNames)}]</p>
      <p>token: {token}</p>

      <Container>
        <Row>
          <Col>
            <div className={"pt-1"} style={{ backgroundColor: "#39C0ED" }}>
              <span>Your doses will be taken on these days: {displayArray(dayNames)}
              at the following times: </span>
              <br />
              <ListGroup horizontal={"sm"} className="my-2 justify-content-center">
                {getState('theTimes').map((time, index) =>
                  <ListGroup.Item className={"ml-2 mr-2 mb-3"} variant={'secondary'} key={{ time } + '.' + index}>
                    {toTwelveHr(time)}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Button variant={'danger'} onClick={cancelOut}>Cancel</Button>
      <Button onClick={prev}>Previous</Button>
      <Button onClick={finish}>Finish</Button>

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
