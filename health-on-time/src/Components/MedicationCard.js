import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";

const MedicationCard = ({ medications, setChosenMed }) => {

  return (
    <div>
      <CardDeck>
        {medications.map((medication) => (
          <Card key={medication.appNumber}>
            <Card.Body>
              <Card.Title>{medication.brandName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {medication.manifacturer}
              </Card.Subtitle>
              <Card.Text>FDA-No: {medication.appNumber}</Card.Text>
              <Button setChosenMed={setChosenMed} onClick={() => setChosenMed(medication)}>Add</Button>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};

export default MedicationCard;
