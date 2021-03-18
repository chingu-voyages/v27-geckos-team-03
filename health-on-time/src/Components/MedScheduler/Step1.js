// Step1.js
//import MenuContext from "antd/lib/menu/MenuContext";
import React, {useState} from "react";
import { Modal, Container, Button} from 'react-bootstrap';
import { fixCapitalization } from './helpers';
//import { getBoolsFromDays } from "./helpers";

function Step1(props) {
  const [modalShow, setModalShow] = useState(false);
  const boolVal = (str) => (str === 'true');
  const { monX, tueX, wedX, thuX, friX, satX, sunX, everyX, setMonX, setTueX, setWedX,
    setThuX, setFriX, setSatX, setSunX, onChangeEveryX } = props;

  function validate() {
    const checkDaysSet = () => (everyX || monX || tueX || wedX || thuX || friX || satX || sunX);
    console.log("16:Step1 checkDaysSet: " + checkDaysSet());
    if (!checkDaysSet()) // if none set show modal "Choose days before proceeding"
      setModalShow(true);
    else props.next();
  } // end function validate
  
  return (
    <Container>
        <div className="p-4">
        <h6 className="text-center mt-1 mb-4">
          Which day(s) of the week would you like to schedule <b>{props.chosenMed ? fixCapitalization(props.chosenMed.brandName) : null }</b>?
        </h6>  
          
          {/* The gray checkbox area */}
          <div className="rounded pl-3 pt-2 pl-5 bg-secondary">
            
            <div className="row pt-2 mt-2"> {/* row with one column for "every day" */}
              <div className="col">
                <div className="ml-5 form-check form-check-inline"> {/* used to be: onChange={e => {setEveryX(e.target.value)} */}
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="everyX" value={everyX} checked={everyX} onChange={onChangeEveryX} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox1"><b style={{verticalAlign: "super"}}>Every day</b></label>
                </div>
                <hr />
              </div> 
            </div> {/* end row */}
                
            <div className="row d-flex justify-content-center">
              <div className="col-6 col-sm-6">
                <div className="mb-2 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="monX" checked={monX || everyX} value={monX} onChange={e => setMonX(!boolVal(e.target.value))} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox2"><span className="ml-1" style={{ verticalAlign: "super" }}>Monday</span></label>
                </div>
              </div>
              <div className="col-6 col-sm-6">
                <div className="mb-2 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox6" name="friX" checked={friX || everyX} value={friX} onChange={e => setFriX(!boolVal(e.target.value))} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox6"><span className="ml-1" style={{ verticalAlign: "super" }}>Friday</span></label>
                </div>
              </div>
              <div className="col-6 col-sm-6">
                <div className="mb-2 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="tueX" checked={tueX || everyX} value={tueX} onChange={e => setTueX(!boolVal(e.target.value))} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox3"><span className="ml-1" style={{ verticalAlign: "super" }}>Tuesday</span></label>
                </div>
              </div>
              <div className="col-6 col-sm-6">
                <div className="mb-2 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox7" name="satX" checked={satX || everyX} value={satX} onChange={e => setSatX(!boolVal(e.target.value))} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox7"><span className="ml-1" style={{ verticalAlign: "super" }}>Saturday</span></label>
                </div>
              </div>
              <div className="col-6 col-sm-6">
                <div className="mb-2 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="wedX" checked={wedX || everyX} value={wedX} onChange={e => setWedX(!boolVal(e.target.value))} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox4"><span className="ml-1" style={{ verticalAlign: "super" }}>Wednesday</span></label>
                </div>
              </div>
              <div className="col-6 col-sm-6">
                <div className="mb-2 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox8"  name="sunX" checked={sunX || everyX} value={sunX} onChange={e => setSunX(!boolVal(e.target.value))} />
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox8"><span className="ml-1" style={{ verticalAlign: "super" }}>Sunday</span></label>
                </div>
              </div>  
            </div> {/* end row with all the separate days */}
            <div className="row pb-3 mb-5">
              <div className="col">
                <div className="mb-4 ml-5 form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox5" name="thuX" checked={thuX || everyX} value={thuX} onChange={e => setThuX(!boolVal(e.target.value))}/>
                  <label className="text-white form-check-label" htmlFor="inlineCheckbox5"><span className="ml-1" style={{ verticalAlign: "super" }}>Thursday</span></label>
                </div>
              </div>
            </div>
          
          </div> {/* end grey day picker box */}

          {/* Bottom buttons ("Cancel" and "Proceed") */}
          <div className="row mt-5 d-flex justify-content-center">
              <div className="col text-center">
                <Button
                  style={{ padding: "6px 17.965px" }}
                  variant={'danger'}
                  onClick={() => props.cancelout()}>Cancel
                </Button>
              </div>
              <div className="col text-center">
                <Button
                  variant={'primary'}
                  onClick={() => validate()}>Proceed
                </Button>
              </div>
            </div>
          
        </div>
      
      <Step1ErrorModal
        show={modalShow}
        onHide={() => setModalShow(false)}
          cancelout={props.cancelout}
      />
    </Container>
  ); // end return statement

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
