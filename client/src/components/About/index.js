import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import greta from "./greta.jpg";
import "./style.css";

// anything that is materialize react specific has to be imported

function About() {
  return (
    <Row>
      <Col m={6} s={12}>
        <CardPanel className="teal">
          <div classname="container center">
            <h1 className="white-text center">Better Earth</h1>
            <div className="white-text center">
              Better Earth is an application that helps people find sustainable
              alternative to everyday products, such as clothing and household
              goods. We also provide the latest news on the environment as well
              as a carbon footprint functionality for our users to stay current
              on their envrionmental impact.
            </div>
            <hr />
            <div className="container">
            <img className="greta" alt="greta" src={greta} />
            </div>
           
          </div>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default About;
