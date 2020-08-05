import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import greta from "./greta.jpg"

// anything that is materialize react specific has to be imported

function About() {
  return (
    <Row>
      <Col m={6} s={12}>
        <CardPanel className="teal">
          <span className="white-text">

            Better Earth is an application that helps people find sustainable alternative to everyday products, such as clothing and household goods. 
            We also provide the latest news on the environment as well as a carbon footprint functionality for our users to stay current on their envrionmental impact.
          

          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default About;