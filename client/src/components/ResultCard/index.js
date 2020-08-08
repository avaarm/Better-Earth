import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import "./style.css";

// anything that is materialize react specific has to be imported

function ResultCard(props) {
  return (
    <Row>
      <Col s={12}>
        
        <CardPanel className="productResults">
          <p className="center"> Your Sustainable Product Here</p>
          
          <span className="white-text">
<div></div>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default ResultCard;
