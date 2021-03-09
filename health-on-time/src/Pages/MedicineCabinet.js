import React from "react";
import SearchMedication from "../Components/SearchMedication";
import { Button, Card, CardDeck } from "react-bootstrap";

const MedicineCabinet = ({ medications, deleteMedication }) => {
  // let deleteMedication = (medicationID) => {
  //   console.log(medicationID, "med id");
  // };

  return (
    <div>
      {console.log(medications)}
      <h2>Current User medications</h2>
      <CardDeck>
        {medications !== undefined
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
          : null}
      </CardDeck>
      <h1>MedicineCabinet</h1>
      <SearchMedication />
    </div>
  );
};

export default MedicineCabinet;
