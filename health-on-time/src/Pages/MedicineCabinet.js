import React, { useEffect, useState } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { GiMedicinePills } from "react-icons/gi";
function MedicineCabinet({ medications, deleteMedication }) {
  const [medCards, setMedCards] = useState([]);
  useEffect(() => {
    if (medications)
      setMedCards(
          medications.map((med) => {
            return (
              <Card style={{ minWidth: 225, maxWidth: 300 }} key={med.id}>
                <GiMedicinePills size={36} />

                <Card.Body>
                  <Card.Title>{med.name}</Card.Title>
                  <Card.Text>{med.description}</Card.Text>
                  <Button
                    onClick={() => deleteMedication(med.id)}
                    variant="danger"
                  >
                    Delete Medication
                  </Button>
                </Card.Body>
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
