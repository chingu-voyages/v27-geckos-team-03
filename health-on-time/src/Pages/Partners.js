import React, { useEffect, useState } from "react";
import { Card, CardColumns, CardDeck } from "react-bootstrap";

const AccountabilityPartners = ({ partners, patients }) => {
  const [partnerCards, setPartnerCards] = useState([]);
  const [patientCards, setPatientCards] = useState([]);
  // function turnPartnerToCards(arrayOfObjects) {
  //   arrayOfObjects.map((person) => {
  //     return (
  //       <Card key={person.id}>
  //         <Card.Img variant="top" src={person.profile_pic} />
  //         <Card.Body>
  //           <Card.Title>{person.name}</Card.Title>
  //           {/* <Card.Text>{person.description}</Card.Text> */}
  //         </Card.Body>
  //       </Card>
  //     );
  //   });
  // }
  useEffect(() => {
    if (partners && patients) {
      setPartnerCards(
        partners.map((person) => {
          return (
            <Card style={{ width: "18rem" }} bg={"primary"} key={person.id}>
              <Card.Img variant="top" src={person.profile_pic} roundedCircle />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                {/* <Card.Text>{person.description}</Card.Text> */}
              </Card.Body>
            </Card>
          );
        })
      );
      setPatientCards(
        patients.map((person) => {
          return (
            <Card style={{ width: "18rem" }} bg={"Light"} key={person.id}>
              <Card.Img variant="top" src={person.profile_pic} roundedCircle />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>{person.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      );
    }
  }, [partners, patients]);
  return (
    <div style={{ margin: "4%" }}>
      <h1>Accountability Partners</h1>
      <h2>People who I hold accountable</h2>
      <CardDeck style={{ width: "45%" }}>{patientCards}</CardDeck>
      <br></br>
      <h2>People who I hold me accountable</h2>
      <CardDeck style={{ width: "45%" }}>{partnerCards}</CardDeck>
    </div>
  );
};

export default AccountabilityPartners;
