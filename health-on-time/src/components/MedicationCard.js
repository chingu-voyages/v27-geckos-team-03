import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";

const MedicationCard = ({ medications }) => {
  return (
    <div>
      <CardDeck>
        {medications.map((medication) => (
          <Card key={medication.appNumber}>
            <Card.Body>
              <Card.Title>{medication.brandName}</Card.Title>
              <Card.Text>From: {medication.manifacturer}</Card.Text>
              <Card.Text>FDA num: {medication.appNumber}</Card.Text>
              <Button>Add</Button>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>

    // <div>
    //   <CardDeck>
    //     <Card>
    //       <Card.Body>
    //         <Card.Title>{medications.brandName}</Card.Title>
    //         <Card.Text>{medications.manifacturer}</Card.Text>
    //         {medications ? <Button>Add</Button> : ""}
    //       </Card.Body>
    //     </Card>
    //   </CardDeck>
    // </div>
  );
};
// const MedicationCard = (props) => {
//   return (
//     <div>
//       <CardDeck>
//         <Card>
//           <Card.Body>
//             <Card.Title>Your Medication</Card.Title>
//             <Card.Text>{props.medications}</Card.Text>
//             {props.medications ? <Button>Add</Button> : ""}
//           </Card.Body>
//         </Card>
//       </CardDeck>
//     </div>
//   );
// };

export default MedicationCard;
