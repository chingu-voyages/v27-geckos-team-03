// Step1.js
import React, {useState} from "react";
import { Modal, Container, Button} from 'react-bootstrap';
import { fixCapitalization } from './helpers';

function Step1(props) {
    //const [disabled, setDaysDisabled] = useState(false);

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

    /*
    function setAll() {
        console.log('Step1.js line 20, setAll called ');
        setDaysDisabled(true);
    }*/
    

    return (
      <Container>
        <div className="p-4">
            <h6 className="mb-4">Which day(s) of the week would you like to schedule {fixCapitalization(props.chosenMed.brandName)}?</h6>
            

            {/* Note when "Every day" is checked, the days of the week checkboxes are checked but their value is not "set" */}
            {/* In regards to form results, when "everyday" is checked, we don't care what the others are */}
            <div className="rounded pl-3 pt-2 pl-5" style={{backgroundColor: "lightgray"}}>
                <div className="row mt-2">
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="everyday" value={props.getState('everyday', false)} checked={props.getState('everyday', false)} onChange={ props.handleChange }/>
                      <label className="form-check-label" htmlFor="inlineCheckbox1"><b style={{verticalAlign: "super"}}>Every day</b></label> {/* Removing from above line: onChange={(e) => { setAll(); props.handleChange(e) }} */}
                    </div>
                    <hr />
                  </div> 
                </div>
                <div className="row">
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monday" checked={props.getState('monday', false) || props.getState('everyday', false)} value={props.getState('monday', false)} onChange={props.handleChange} />
                      <label className="form-check-label" htmlFor="inlineCheckbox2"><span className="ml-1" style={{ verticalAlign: "super" }}>Monday</span></label>
                    </div>
                  </div> 
                <div className="col-6 col-sm-6">
                  <div className="mb-2 form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tuesday" checked={props.getState('tuesday', false) || props.getState('everyday', false)} value={props.getState('tuesday', false)} onChange={props.handleChange} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3"><span className="ml-1" style={{ verticalAlign: "super" }}>Tuesday</span></label>
                  </div>
                </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="wednesday" checked={props.getState('wednesday', false) || props.getState('everyday', false)} value={props.getState('wednesday', false)} onChange={props.handleChange} />
                      <label className="form-check-label" htmlFor="inlineCheckbox4"><span className="ml-1" style={{ verticalAlign: "super" }}>Wednesday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="thursday" checked={props.getState('thursday', false) || props.getState('everyday', false)} value={props.getState('thursday', false)} onChange={props.handleChange}/>
                      <label className="form-check-label" htmlFor="inlineCheckbox5"><span className="ml-1" style={{ verticalAlign: "super" }}>Thursday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="friday" checked={props.getState('friday', false) || props.getState('everyday', false)} value={props.getState('friday', false)} onChange={props.handleChange} />
                      <label className="form-check-label" htmlFor="inlineCheckbox6"><span className="ml-1" style={{ verticalAlign: "super" }}>Friday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox7" name="saturday" checked={props.getState('saturday', false) || props.getState('everyday', false)} value={props.getState('saturday', false)} onChange={props.handleChange} />
                      <label className="form-check-label" htmlFor="inlineCheckbox7"><span className="ml-1" style={{ verticalAlign: "super" }}>Saturday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                  <div className="mb-4 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox8"  name="sunday" checked={props.getState('sunday', false) || props.getState('everyday', false)} value={props.getState('sunday', false)} onChange={props.handleChange} />
                      <label className="form-check-label" htmlFor="inlineCheckbox8"><span className="ml-1" style={{ verticalAlign: "super" }}>Sunday</span></label>
                  </div>
                </div>
              </div>
          </div>


            <div className="row mt-5 d-flex justify-content-center">
              <div className="col text-center">
              <Button style={{"padding-left": "11px", "padding-right": "11px"}} variant={'danger'} onClick={() => props.cancelOut()}>Start over</Button>
              </div>
              <div className="col text-center">
              <Button variant={'primary'} onClick={() => validate()}>Proceed</Button>
              </div>
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
