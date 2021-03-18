import React, { useContext, useEffect } from "react";
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';
import { toTwelveHr, fixCapitalization, getDays, getDayNames, displayArray } from './helpers';
import "../../Styles/MedScheduler.css";
import { UserContext } from "../../Components/UserContext";
import { useHistory } from 'react-router-dom';

function FinalStep({ monX, tueX, wedX, thuX, friX, satX, sunX, everyX, theHoursX, prev, chosenMed, existingPrescription, cancelout, getState }) {
  let medName = fixCapitalization(chosenMed.brandName);
  let fda_number = chosenMed.appNumber;
  
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();
  const { deleteMedication, addResponse, setAddResponse } = useContext(UserContext);

  console.log("Entering FinalStep: ");
  
  const { handleNewPrescription, token } = useContext(UserContext);
  /*
  let mon = getState('monday');
  let tues = getState('tuesday');
  let wed = getState('wednesday');
  let thur = getState('thursday');
  let fri = getState('friday');
  let sat = getState('saturday');
  let sun = getState('sunday');
  let every = getState('everyday');
  */
  console.log("[every, m-f]: ", everyX, monX, tueX, wedX, thuX, friX, satX, sunX);

  let hours = theHoursX;
  console.log('hours: ' + hours);
  
  let weekdays = getDays(everyX, monX, tueX, wedX, thuX, friX, satX, sunX); // array length:7 of booleans
  let dayNames = getDayNames(everyX, monX, tueX, wedX, thuX, friX, satX, sunX); // array containing names of stored days

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h6 className={'mb-4 text-center'}>Please confirm the details below and click "Finish" when ready. You may also use the "Previous" button to edit your days or times.</h6>
            <div className={"text-center py-2 px-4 mb-4 rounded timeDisplay"} style={{ backgroundColor: "#39C0ED" }}>
              <p className={"mt-2"}>{medName} will be scheduled at the following times for these days of the week:<br />
                <b>{displayArray(dayNames)}</b>
              </p>
              <ListGroup horizontal={"sm"} className="my-2 justify-content-center">
                {theHoursX.map((time, index) =>
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
            <Button variant={'danger'} onClick={cancelout}>Cancel</Button>
          </Col>
          <Col className="text-center">
            <Button onClick={prev}>Previous</Button>
          </Col>
          <Col className="text-center">
            <Button variant={'success'} onClick={finish}>Confirm</Button>
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
            <p>addResponse: {addResponse}</p>
          </Col>
        </Row>
         
        <FinalStepModal
          show={ addResponse ? true : false }
          onHide={() => setModalShow(false)}
          onEnter={() => {setAddResponse(null)}}
        />

      </Container>
    </div>
  );

  function finish() {

    if (existingPrescription) {
      deleteMedication(existingPrescription.medication.id);
      // THIS IS PROBLEMATIC IF doAdd RUNS BEFORE old prescription is deleted!!!!! Can rewrite with callback.
      doAdd();
    }
    // otherwise just do the add
    else {
      doAdd();  
    }

    function doAdd() {
      let newPrescriptionObj = {
        medName: medName,
        fda_number: fda_number,
        description: "",
        weekdays: weekdays,
        hours: hours,
        userToken: token
      };
      handleNewPrescription(newPrescriptionObj);
    }
  } // end function finish
  
  function FinalStepModal(props) {
    return (
      <Modal
        {...props}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4>Success!</h4>
          <p><b>{medName}</b> has been saved to your Medicine Cabinet.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            setAddResponse(null)
            cancelout();
            history.push('medicine');
            props.onHide();
          }}>Finish</Button>
        </Modal.Footer>
      </Modal>
    );
  } // end FinalStepModal
  
} // end function FinalStep

export default FinalStep;
