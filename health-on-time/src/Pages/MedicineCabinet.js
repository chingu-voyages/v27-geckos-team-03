
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardDeck, Row, Col } from "react-bootstrap";
import { GiMedicinePills } from "react-icons/gi";
import { UserContext } from "../Components/UserContext";
import { dayNamesFromMed, toTwelveHr } from "../Components/MedScheduler/helpers";

function MedicineCabinet() {
  const [medCards, setMedCards] = useState([]);
  const { medications, deleteMedication, prescriptions } = useContext(UserContext);

  useEffect(() => {
    if (medications)
      setMedCards(
          medications.map((med) => {
            return (
              <Card style={{ minWidth: 225, maxWidth: 300, paddingBottom: 10, paddingTop: 15 }} key={med.id}>
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
                  <Row className="rounded-top bg-secondary pt-2 text-light mt-2 pb-1">
                      <Col className="px-1 pt-1"><span>Days:</span></Col>
                      <Col className="small text-left">
                        <div className=" pt-1">{printDays(med)}</div>
                      </Col>
                  </Row>
                  <Row className="rounded-bottom bg-secondary pb-2 text-light">
                    <Col className="px-1"><span>Times:</span></Col>
                    <Col className="small text-left">
                      <div className="pt-1">{printHours(med)}</div>
                    </Col>
                  </Row>
                  {/*
                  <Row>
                    <Col xs={1} className={"ml-0"}><GiMedicinePills size={36} /></Col>
                    <Col><Card.Text>{med.description}</Card.Text></Col>
                  </Row>
                  */}
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
                    className="mt-2"
                    style={{fontSize: "0.9rem"}}
                    block>
                      Edit schedule
                  </Button>
                </Card.Footer>
              </Card>
            );
          })
          
      );
  }, [medications, deleteMedication]);

  
  function printDays(med) {
    //console.log(med);
    let thePrescr = prescriptions.find(el => el.medication.id === med.id);
    return (dayNamesFromMed(thePrescr.weekdays, true)).map(el => <span key={el}>{el} </span>)  
  }
  function printHours(med) {
    let thePrescr = prescriptions.find(el => el.medication.id === med.id);
    return thePrescr.hours.map((hr, i) => <span className="d-block" key={hr + '.' + i}>{toTwelveHr(hr)} </span>)
  }

  return (
    <div className="container">
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
      
      {/* <SearchMedication /> MOVED TO Pages/AddMedication.js */} 
    </div>
  );
}

export default MedicineCabinet;
