
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardDeck, Row, Col } from "react-bootstrap";
import { GiMedicinePills } from "react-icons/gi";
import { UserContext } from "../Components/UserContext";
import { dayNamesFromMed, toTwelveHr } from "../Components/MedScheduler/helpers";
import MedSchedulerMain from "../Components/MedScheduler/MedSchedulerMain";

function MedicineCabinet() {
  const [medCards, setMedCards] = useState([]);
  const { medications, deleteMedication, prescriptions } = useContext(UserContext);
  const [showEditForm, setShowEditForm] = useState(false);
  const [chosenMed, setchosenmed] = useState(); // chosenMed: med object chosen by search "Add" button
  const [existingPrescription, setExistingPrescription] = useState(); // existingPrescription object

  // Reset the "Add med" process
  function cancelout() {
    setchosenmed(null);
    setExistingPrescription(null);
    setShowEditForm(false);
  }

  useEffect(() => {
    function getPrescription(med) {
      return prescriptions.find(el => el.medication.id === med.id);
    }
    function doEdit(med) {
      med.appNumber = med.fda_number;
      med.brandName = med.name;
      setchosenmed(med);
      setExistingPrescription(getPrescription(med));
      setShowEditForm(true);    
    }
    if (medications)
      setMedCards(
          medications.map((med) => {
            return (
              <Card style={{ minWidth: 250, maxWidth: 300, paddingBottom: 10, paddingTop: 15 }} key={med.id}>
                <Card.Header>
                  <Row>
                    <Col>
                      <GiMedicinePills className={""} size={36} />
                    </Col>
                  </Row>
                  <span style={{ fontSize: "1.2rem", verticalAlign: "bottom" }}>{med.name}</span>
                </Card.Header>
                <Card.Body>
                  <Card.Text className={"textJustify"}>
                    <span>{med.description}</span>
                  </Card.Text>
                  <Row className="border-bottom rounded-top py-2 mx-2 bg-secondary pt-1 text-light mt-2 pb-1">
                      <Col className="px-1 pt-1"><span>Days:</span></Col>
                      <Col className="small text-left">
                        <div className=" pt-1">{printDays(med)}</div>
                      </Col>
                  </Row>
                  <Row className="rounded-bottom mx-2 bg-secondary py-2 pb-2 text-light">
                    <Col className="px-1"><span>Times:</span></Col>
                    <Col className="small text-left">
                      <div className="pt-1">{printHours(med)}</div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Button
                    style={{fontSize: "0.89rem"}}
                    onClick={() => deleteMedication(med.id)}
                    variant="danger"
                    block
                  >
                    Delete Medication
                  </Button>
                  <Button
                    className="mt-3"
                    style={{ fontSize: "0.9rem" }}
                    onClick={() => doEdit(med)}
                    block>
                      Edit schedule
                  </Button>
                </Card.Footer>
              </Card>
            );
          })
      );
    
    function printDays(med) {
      //console.log(med);
      let thePrescr = getPrescription(med);
      return (dayNamesFromMed(thePrescr.weekdays, true)).map(el => <span key={el}>{el} </span>)  
    }
    function printHours(med) {
      let thePrescr = prescriptions.find(el => el.medication.id === med.id);
      return thePrescr.hours.map((hr, i) => <span className="d-block" key={hr + '.' + i}>{toTwelveHr(hr)} </span>)
    }
  }, [medications, deleteMedication, prescriptions]);

  
  return (
    !showEditForm ?
      (<div className="container">
        <h1 className="text-center">Medicine Cabinet</h1>
        {medications ? (
          <div className="text-center">
            <CardDeck>{medCards}</CardDeck>
          </div>
        ) : (
          <h2>
            Currently no medications have been added. Please Click on "Search for
            meds" on your sidebar menu to update your medicine cabinet.
          </h2>
        )}
      </div>) 
      :
      (
        <div className="container">
          <h1 className="text-center">Edit schedule</h1>
          <MedSchedulerMain
            cancelout={cancelout}
            chosenMed={chosenMed}
            existingPrescription={existingPrescription}
            deleteMedication={deleteMedication}
          />
        </div> 
  
      )
  ); // end return statement
} // end function MedicineCabinet

export default MedicineCabinet;
