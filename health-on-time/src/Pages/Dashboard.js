import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DashboardPage = ({ profile_pic, name }) => {
  let defaultImageUrl = "https://ssl.gstatic.com/accounts/ui/avatar_2x.png";

  return (
    <div>
      <h1>DashboardPage</h1>
      <Row>
      <Col xs={2} sm={2} md={1}>
        <Image
          // style={{ maxWidth: "75px" }}
          src={profile_pic ? profile_pic : defaultImageUrl}
          // rounded
          thumbnail
        />
      </Col>
      <Col>
        <h2>Welcome Back, {name}!</h2>
      </Col>
    </Row>
    </div>
  );
};

export default DashboardPage;
