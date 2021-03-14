import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";

const MedicationCard = ({ medications, setchosenmed, setprescriptionexistsflag }) => {

  return (
    <div>
      <CardDeck>
        {medications.map((medication) => (
          <Card style={{ minWidth: 200, maxWidth: 300 }} key={medication.appNumber}>
            <Card.Body>
               
              <Card.Title>{medication.brandName}</Card.Title>
              { (medication.manifacturer && medication.appNumber) ?
                <>
                  <Card.Subtitle className="mb-2 text-muted">
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
