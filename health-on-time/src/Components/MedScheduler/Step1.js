// Step1.js
import React, {useState, useEffect} from "react";
import { Modal, Container, Row, Button, Col } from 'react-bootstrap';

function Step1(props) {
 
  const [disabled, setDaysDisabled] = useState(false);

  // There is random warning about checkboxes not being initialized and input going from uncontrolled to controlled
  // but componenet works fine despite warning.

  const [modalShow, setModalShow] = React.useState(false);

  function validate() {
    if (!checkDaysSet()) setModalShow(true);
    else props.next();
  }

  function checkDaysSet() {
    return (
      props.getState('everyday') || props.getState('monday') ||
      props.getState('tuesday') || props.getState('wednesday') ||
      props.getState('thursday') || props.getState('friday') ||
      props.getState('saturday') || props.getState('sunday')
    );
  }

  function setAll() {
    console.log('Step1.js line 20, setAll called ');
    setDaysDisabled(true);
  }

  return (
    <Container>
      <p> {props.chosenMed.brandName}</p>
      <p>10 Step1.js {props.chosenMed.appNumber}</p>

      
      <input type="checkbox" id="everyday" name="everyday" value={props.getState('everyday'), false} checked={props.getState('everyday')} onChange={(e) => { setAll(); props.handleChange(e) }} />
      <label htmlFor="everyday">Every day</label><br /><br />

      
      <input disabled={props.getState('everyday')} type="checkbox" id="monday" name="monday" checked={props.getState('monday') || props.getState('everyday')} value={props.getState('monday', false)} onChange={props.handleChange} />
      <label htmlFor="monday"> Monday </label><br />
      <input disabled={props.getState('everyday')} type="checkbox" id="tuesday" name="tuesday" checked={props.getState('tuesday') || props.getState('everyday')} value={props.getState('tuesday', false)} onChange={props.handleChange}/>
      <label htmlFor="tuesday"> Tuesday</label><br />
      <input disabled={props.getState('everyday')} type="checkbox" id="wednesday" name="wednesday" checked={props.getState('wednesday') || props.getState('everyday')} value={props.getState('wednesday', false)} onChange={props.handleChange} />
      <label htmlFor="wednesday"> Wednesday</label><br /><br />
      <input disabled={props.getState('everyday')} type="checkbox" id="thursday" name="thursday" checked={props.getState('thursday') || props.getState('everyday')} value={props.getState('thursday', false)} onChange={props.handleChange} />
      <label htmlFor="thursday"> Thursday</label><br /><br />
      <input disabled={props.getState('everyday')} type="checkbox" id="friday" name="friday" checked={props.getState('friday') || props.getState('everyday')} value={props.getState('friday', false)} onChange={props.handleChange} />
      <label htmlFor="friday"> Friday</label><br /><br />
      <input disabled={props.getState('everyday')} type="checkbox" id="saturday" name="saturday" checked={props.getState('saturday') || props.getState('everyday')} value={props.getState('saturday', false)} onChange={props.handleChange} />
      <label htmlFor="saturday"> Saturday</label><br /><br />
      <input disabled={props.getState('everyday')} type="checkbox" id="sunday" name="sunday" checked={props.getState('sunday') || props.getState('everyday')} value={props.getState('sunday', false)} onChange={props.handleChange} />
      <label htmlFor="sunday"> Sunday</label><br /><br />
   
      <Button variant={'danger'} onClick={() => props.cancelOut()}>Start over</Button>
      <Button variant={'primary'} onClick={() => validate()}>Proceed</Button>

      <Step1ErrorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cancelOut={props.cancelOut}
      />
    </Container>
  );

  function Step1ErrorModal(props) {
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
          <h5>Notice: You didn't choose any days! Please pick some days to schedule to proceed.</h5>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => props.cancelOut()}>Cancel adding med</Button> */}
        </Modal.Footer>
      </Modal>
    ); // end return
  } // end function Step1ErrorModal

} // end function Step1

export default Step1;
