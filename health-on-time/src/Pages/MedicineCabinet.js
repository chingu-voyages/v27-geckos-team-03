import React from "react";
import SearchMedication from "../Components/SearchMedication";
import { Button, Card, CardDeck } from "react-bootstrap";

const MedicineCabinet = ({ medications }) => {
  /*   turnToCards.map((med) => {
    return medications.map((med) => (
        <Card key={med.id}>
            <Card.Body>
              <Card.Title>{med.Name}</Card.Title>
              <Card.Text>Description {med.Description}</Card.Text>
              <Button>Delete</Button>
            </Card.Body>
          </Card>
  ));
 */
  let deleteMedication = (e) => {
    console.log(e.target.value);
    /* {turnToCards()} */
  };

  // const MedicineCabinet = ({ medications }) => {
  return (
    <div>
      {console.log(medications)}
      <h2>Current User medications</h2>
      {medications.map((med) => (
        <div key={med.id}>
          <h3>{med.name}</h3>
          <h3>{med.description}</h3>
          <button onClick={deleteMedication}>delete</button>
        </div>
      ))}

      {/* <Card key={med.id}>
            <Card.Body>
              <Card.Title>{med.Name}</Card.Title>
              <Card.Text>Description {med.Description}</Card.Text>
              <Button>Delete</Button>
            </Card.Body>
          </Card> */}

      <h1>MedicineCabinet</h1>
      <SearchMedication />
    </div>
  );
};

export default MedicineCabinet;
