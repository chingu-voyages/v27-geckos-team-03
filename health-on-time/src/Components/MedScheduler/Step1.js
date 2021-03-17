// Step1.js
//import MenuContext from "antd/lib/menu/MenuContext";
import React, {useState} from "react";
import { Modal, Container, Button} from 'react-bootstrap';
import { fixCapitalization } from './helpers';
//import { getBoolsFromDays } from "./helpers";

function Step1(props) {

  const [modalShow, setModalShow] = useState(false);
  console.dir(props);

  const { monX, tueX, wedX, thuX, friX, satX, sunX, everyX, setMonX, setTueX, setWedX,
    setThuX, setFriX, setSatX, setSunX, setEveryX } = props;

  function validate() {
    
    if (!checkDaysSet()) setModalShow(true);
    else props.next();
    props.next();
  }
  
  function checkDaysSet() {
    return (
      everyX || monX || tueX || wedX || thuX || friX || satX || sunX
    );
  }
      
    return (
      <Container>
        <div className="p-4">
            <h6 className="mb-4">Which day(s) of the week would you like to schedule {fixCapitalization(props.chosenMed.brandName)}?</h6>
            
          <p>Current: {props.getState('monday')}</p>
            {/* Note when "Every day" is checked, the days of the week checkboxes are checked but their value is not "set" */}
            {/* In regards to form results, when "everyday" is checked, we don't care what the others are */}
            <div className="rounded pl-3 pt-2 pl-5" style={{backgroundColor: "lightgray"}}>
                <div className="row mt-2">
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="everyX" value={everyX} checked={everyX} onChange={e => setEveryX(e.target.value) }/>
                      <label className="form-check-label" htmlFor="inlineCheckbox1"><b style={{verticalAlign: "super"}}>Every day</b></label>
                    </div>
                    <hr />
                  </div> 
                </div>
                <div className="row">
                  <div className="col-6 col-sm-6">
                <div className="mb-2 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monX" checked={monX || everyX} value={monX} onChange={e => setMonX(e.target.value)} />
                    <label className="form-check-label" htmlFor="inlineCheckbox2"><span className="ml-1" style={{ verticalAlign: "super" }}>Monday</span></label>
                    </div>
                  </div> 
                <div className="col-6 col-sm-6">
                  <div className="mb-2 form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tueX" checked={tueX || everyX} value={tueX} onChange={e => setTueX(e.target.value)} />
                    <label className="form-check-label" htmlFor="inlineCheckbox3"><span className="ml-1" style={{ verticalAlign: "super" }}>Tuesday</span></label>
                  </div>
                </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="wedX" checked={wedX || everyX} value={wedX} onChange={e => setWedX(e.target.value)} />
                      <label className="form-check-label" htmlFor="inlineCheckbox4"><span className="ml-1" style={{ verticalAlign: "super" }}>Wednesday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="thuX" checked={thuX || everyX} value={thuX} onChange={e => setThuX(e.target.value)}/>
                      <label className="form-check-label" htmlFor="inlineCheckbox5"><span className="ml-1" style={{ verticalAlign: "super" }}>Thursday</span></label>
                    </div>{/* Removing from above line: onChange={(e) => { setAll(); props.handleChange(e) }} */}
                  </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="friX" checked={friX || everyX} value={friX} onChange={e => setFriX(e.target.value)} />
                      <label className="form-check-label" htmlFor="inlineCheckbox6"><span className="ml-1" style={{ verticalAlign: "super" }}>Friday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                    <div className="mb-2 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox7" name="satX" checked={satX || everyX} value={satX} onChange={e => setSatX(e.target.value)} />
                      <label className="form-check-label" htmlFor="inlineCheckbox7"><span className="ml-1" style={{ verticalAlign: "super" }}>Saturday</span></label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6">
                  <div className="mb-4 form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox8"  name="sunX" checked={sunX || everyX} value={sunX} onChange={e => setSunX(e.target.value)} />
                      <label className="form-check-label" htmlFor="inlineCheckbox8"><span className="ml-1" style={{ verticalAlign: "super" }}>Sunday</span></label>
                  </div>
                </div>
              </div>
          </div>

            <div className="row mt-5 d-flex justify-content-center">
              <div className="col text-center">
              <Button style={{"paddingLeft": "11px", "paddingRight": "11px"}} variant={'danger'} onClick={() => props.cancelout()}>Start over</Button>
              </div>
              <div className="col text-center">
              <Button variant={'primary'} onClick={() => validate()}>Proceed</Button>
              </div>
            </div>
          </div>
      
      <Step1ErrorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
          cancelout={props.cancelout}
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
          {/* <Button onClick={() => props.cancelout()}>Cancel adding med</Button> */}
        </Modal.Footer>
      </Modal>
    ); // end return
  } // end function Step1ErrorModal

} // end function Step1

export default Step1;
