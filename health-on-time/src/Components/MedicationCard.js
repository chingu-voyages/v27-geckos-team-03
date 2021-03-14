import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { fixCapitalization } from "./MedScheduler/helpers"

const MedicationCard = ({ medications, setchosenmed, setprescriptionexistsflag }) => {

  return (
    <div className="text-center">
      <CardDeck>
        {medications.map((medication) => (
          <Card style={{ minWidth: 225, maxWidth: 300 }} key={medication.appNumber}>
            <Card.Body>
               
              <Card.Title>{fixCapitalization(medication.brandName)}</Card.Title>
              { (medication.manifacturer && medication.appNumber) ?
                <>
                  <Card.Subtitle className="mb-1 text-muted">
                    {medication.manifacturer}
                  </Card.Subtitle>
                  <Card.Text>FDA-No: {medication.appNumber}</Card.Text>
                  <Button onClick={() => { setchosenmed(medication); setprescriptionexistsflag(medication); console.log("MedicationCard.js line 17"); }}>Add</Button>
                </>
                :
                null

              }
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};

export default MedicationCard;
