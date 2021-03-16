import "../Styles/LandingPage.css";
import React from "react";
import { Jumbotron, Button, Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <main className="mt-3 container">
        <div>
          <div className="col logo-column mb-5">
            <img src="Health_on_time_logo.png" className="pl-4 pr-5 img-fluid" alt="Health on Time logo"/>
          </div>
        </div>
        <img alt="hero" className="hero img-fluid" src="/hero.jpg" />
        <Jumbotron className="jumbtron">
          <p>
            COVID has made it difficult to care of those we love, so we created
            APP NAME so we can hold one each other accountable on taking our
            medication
          </p>
          <p>
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary">Sign up</Button>
            </Link>
          </p>
        </Jumbotron>
        <h1 style={{marginBottom: "1.8rem"}}>Why Choose Us ?</h1>
        <CardDeck>
          <Card style={{ minWidth: "12rem" }}>
            <Card.Img variant="top" className="img-fluid" src="/planning-cc4.0-piqsels.com.jpg" />
            <Card.Body style={{paddingBottom: "0px"}} >
              <Card.Title>Stay Organized</Card.Title>
              <Card.Text className="card-text-landing">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ minWidth: "12rem" }}>
            <Card.Img variant="top" className="img-fluid" src="/holdhands2.jpg" />
            <Card.Body style={{paddingBottom: "0px"}}>
              <Card.Title>Hold one another accountable</Card.Title>
              <Card.Text className="card-text-landing">
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ minWidth: "12rem" }}>
            <Card.Img variant="top" className="img-fluid" src="/ontime.jpg" />
            <Card.Body style={{paddingBottom: "0px"}}>
              <Card.Title>Stay on time</Card.Title>
              <Card.Text className="card-text-landing">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </main>
    </div>
  );
};

export default LandingPage;
