import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import earth from "./earth.jpg";
import greta from "./greta.jpg";
import "./style.css";

// anything that is materialize react specific has to be imported

function About() {
  return (
    
    <Row>
      <Col m={14} s={20} l={25}>
        <CardPanel className="outerRow">
          <Row>
            <Col className="zip" s={4} l={4}>
              <h3 className="center">Our Mission</h3>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col s={3} l={3}></Col>
            <Col s={6} l={6}>
              <h6 className="center">
                Sustainable alternatives to everyday products exist, we’ll help you find the best ones
            </h6>
              {/* <div className="center">
              Better Earth is an application that helps people find sustainable
              alternative to everyday products, such as clothing and household
              goods. We also provide the latest news on the environment as well
              as a carbon footprint functionality for our users to stay current
              on their envrionmental impact.
            </div> */}
            </Col>
          </Row>
          <Row>
            <Col className="center" s={3} l={3}>
              <Row>
              </Row>
              <Row>
              </Row>
              <Row>
              </Row>
              <Row>
              </Row>
              <Row className="sidebar">
                Better Information
        </Row>
              <Row className="sidebar">
                Better Products
        </Row>
              <Row className="sidebar">
                Better Earth
        </Row>
            </Col>
            <Col className="center" s={6} l={6}>
              <img className="greta" alt="earth" src={earth} />
            </Col>
            <Col className="center" s={3} l={3}>
              <Row className="quote border">
                <p>"At first when I heard about climate change, I was a climate denier. I didn’t think it was happening. Because if there really was an existential crisis like that, that would threaten our civilisation, we wouldn’t be focusing on anything else." - Greta Thunberg</p>
              </Row>
              <Row>
                <img className="greta border" alt="greta" src={greta} />
              </Row>

            </Col>
          </Row>
          {/* <Row>
        <Col className="quote border" s={4} l={3}>
        </Col>
        <Col className="center" s={9} l={9}>
        <div className="container center">
       
       <div className="container">
       <img className="greta border" alt="greta" src={greta} />
       </div>
      
     </div>
        </Col>
        </Row> */}

        </CardPanel>
      </Col>
    </Row>
  );
}

export default About;
