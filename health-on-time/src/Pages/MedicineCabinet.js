
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardDeck, Row, Col } from "react-bootstrap";
import { GiMedicinePills } from "react-icons/gi";
import { UserContext } from "../Components/UserContext";

function MedicineCabinet() {
  const [medCards, setMedCards] = useState([]);
  const { medications, deleteMedication } = useContext(UserContext);

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
  /*Added deleteMedication to dependency array to get rid of warning - Lewis */

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
