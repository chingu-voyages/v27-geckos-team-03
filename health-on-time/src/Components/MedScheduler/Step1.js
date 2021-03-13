// Step1.js
import React, {useState, useEffect} from "react";
import { Modal, Container, Row, Button, Col } from 'react-bootstrap';
import { fixCapitalization } from './helpers';

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
            <p>Which day(s) of the week would you like to schedule {fixCapitalization(props.chosenMed.brandName)}?</p>
            

            <div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="everyday" value={props.getState('everyday'), false} checked={props.getState('everyday')} onChange={(e) => { setAll(); props.handleChange(e) }}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1"><b className="" style={{verticalAlign: "super"}}>Every day</b></label>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monday" checked={props.getState('monday') || props.getState('everyday')} value={props.getState('monday', false)} onChange={props.handleChange} />
                <label className="form-check-label" htmlFor="inlineCheckbox2"><span className="ml-1" style={{ verticalAlign: "super" }}>Monday</span></label>
                        </div>
                    </div> 
                <div className="col-3">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tuesday" checked={props.getState('tuesday') || props.getState('everyday')} value={props.getState('tuesday', false)} onChange={props.handleChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3"><span className="ml-1" style={{ verticalAlign: "super" }}>Tuesday</span></label>
                    </div>
                </div>
                    <div className="col-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="wednesday" checked={props.getState('wednesday') || props.getState('everyday')} value={props.getState('wednesday', false)} onChange={props.handleChange} />
                        <label className="form-check-label" htmlFor="inlineCheckbox4"><span className="ml-1" style={{ verticalAlign: "super" }}>Wednesday</span></label>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="thursday" checked={props.getState('thursday') || props.getState('everyday')} value={props.getState('thursday', false)} onChange={props.handleChange}/>
                        <label className="form-check-label" htmlFor="inlineCheckbox5"><span className="ml-1" style={{ verticalAlign: "super" }}>Thursday</span></label>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="friday" checked={props.getState('friday') || props.getState('everyday')} value={props.getState('friday', false)} onChange={props.handleChange} />
                        <label className="form-check-label" htmlFor="inlineCheckbox6"><span className="ml-1" style={{ verticalAlign: "super" }}>Friday</span></label>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox7" name="saturday" checked={props.getState('saturday') || props.getState('everyday')} value={props.getState('saturday', false)} onChange={props.handleChange} />
                        <label className="form-check-label" htmlFor="inlineCheckbox7"><span className="ml-1" style={{ verticalAlign: "super" }}>Saturday</span></label>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox8"  name="sunday" checked={props.getState('sunday') || props.getState('everyday')} value={props.getState('sunday', false)} onChange={props.handleChange} />
                        <label className="form-check-label" htmlFor="inlineCheckbox8"><span className="ml-1" style={{ verticalAlign: "super" }}>Sunday</span></label>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col">
                <Button variant={'danger'} onClick={() => props.cancelOut()}>Start over</Button>
              </div>
              <div className="col">
                <Button variant={'primary'} onClick={() => validate()}>Proceed</Button>
              </div>
            </div>

      
      

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
