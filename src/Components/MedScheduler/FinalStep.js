import React, { useContext } from "react";
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
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
              <div className={"pt-2 pb-0 px-4 mb-4 rounded timeDisplay"} style={{ backgroundColor: "#39C0ED" }}>
                  <div className="mb-2 text-center">
                      <p className={"mt-1 text-light"} style={{ fontSize: "1.3rem" }}><b>{medName}</b> will be scheduled for the following days:</p>
                      <b><span style={{ fontSize: "1rem" }} className="text-dark">{displayArray(dayNames)}</span></b>
                      <div>
                          {hours && hours.length !== 0 ?
                              <p className="mt-3">
                                  <span style={{ fontSize: "1.1rem" }} className="text-light"><b>at the following times: </b></span>
                              </p>
                              :
                              null    
                          }
                      </div>
                  </div>
                      
                  <div className="d-flex pb-2 flex-wrap justify-content-around">
                      {hours.map((time, index) => 
                          <div key={{ time } + '.' + index} style={{ fontSize: "1.5rem" }}>
                              <span className={"badge mx-1 mb-3 badge-secondary"}>{toTwelveHr(time)}</span>
                          </div>
                      )}
                  </div>
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
