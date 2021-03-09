import React, { useEffect, useState } from "react";
import SearchMedication from "../Components/SearchMedication";
import { Button, Card, CardDeck } from "react-bootstrap";

function MedicineCabinet({ medications, deleteMedication }) {
  const [medCards, setMedCards] = useState([]);
  useEffect(() => {
    if (medications)
      setMedCards(
        medications.map((med) => {
          return (
            <Card key={med.id}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{med.name}</Card.Title>
                <Card.Text>{med.description}</Card.Text>
                <Button
                  onClick={() => deleteMedication(med.id)}
                  variant="primary"
                >
                  Delete Medication
                </Button>
              </Card.Body>
            </Card>
          );
        })
      );
  }, [medications]);

  return (
    <div>
      {console.log(medications)}
      <h2>Current User medications</h2>
      <CardDeck>
        {medCards}
        {/* {medications
          ? medications.map((med) => {
              return (
                <Card key={med.id}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{med.name}</Card.Title>
                    <Card.Text>{med.description}</Card.Text>
                    <Button
                      onClick={() => deleteMedication(med.id)}
                      variant="primary"
                    >
                      Delete Medication
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
          : null} */}
      </CardDeck>
      <h1>MedicineCabinet</h1>
      <SearchMedication />
    </div>
  );
}

export default MedicineCabinet;
