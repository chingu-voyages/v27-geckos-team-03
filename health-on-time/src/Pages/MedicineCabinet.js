import React, { useContext, useEffect, useState } from "react";
import SearchMedication from "../Components/SearchMedication";
import { Button, Card, CardDeck } from "react-bootstrap";
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
            <Card key={med.id}>
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
  }, [medications]);

  return (
    <div>
      <h1>MedicineCabinet</h1>
      {medications ? (
        <CardDeck>{medCards}</CardDeck>
      ) : (
        <h2>
          Currently no medications have been added. Please Click on "Search for
          meds" on your sidebar menu to update your medicine cabinet.
        </h2>
      )}
      <SearchMedication />
    </div>
  );
}

export default MedicineCabinet;
