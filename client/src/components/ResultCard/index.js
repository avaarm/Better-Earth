import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import "./style.css";

// anything that is materialize react specific has to be imported

function ResultCard(props) {
  return (
    <Row>
      <Col m={10} s={12}>
        <CardPanel className="orangeCard">
          <p> Your Sustainable Product</p>
          <span className="white-text">

          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default ResultCard;
