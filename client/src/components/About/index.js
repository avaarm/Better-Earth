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
            <Row>
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img src={greta} alt="about" className="activator"  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Card Title<i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="#">This is a link</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </Row>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default About;