import React from "react";
import { Row, Col } from "react-materialize";
import "./style.css";

function ContributorList() {
  return (
    <Row>
      <Col s={6} m={3} l={3}>
        <a
          href="https://github.com/avaarm"
          title="https://github.com/avaarm"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="armenuhi"
            className="circle responsive-img"
            src="https://avatars0.githubusercontent.com/u/48078730?s=400&u=7fe3acb496694f3b0acbfaafac8e640702662920&v=4"
          />
        </a>
        <div className="name center grey-text text-lighten-4">
          Armenuhi
        </div>
      </Col>
      <Col s={6} m={3} l={3}>
        <a 
          href="https://github.com/jeffreyadamo"
          title="https://github.com/jeffreyadamo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="jeffrey"
            className="circle responsive-img"
            src="https://avatars2.githubusercontent.com/u/58490053?s=460&u=984a062d5bb163c29e4e6eca8409375753dde324&v=4"
          />
        </a>
        <div className="name center grey-text text-lighten-4">
          Jeffrey
        </div>
      </Col>
      <Col s={6} m={3} l={3}>
        <a 
          href="https://github.com/tymcbrid"
          title="https://github.com/tymcbrid"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="tyler"
            className="circle responsive-img"
            src="https://avatars3.githubusercontent.com/u/36458808?s=460&u=26abef4823d0096a8f9dc4a015bae12c6e7cd055&v=4"
          />
        </a>
        <div className="name center grey-text text-lighten-4">
          Tyler
        </div>
      </Col>
      <Col s={6} m={3} l={3}>
        <a 
          href="https://github.com/vxmao87"
          title="https://github.com/vxmao87"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="vin"
            className="circle responsive-img"
            src="https://avatars1.githubusercontent.com/u/61126887?s=460&u=08b64f4263415f36c0a84e5f029677762e663f1b&v=4"
          />
        </a>
        <div className="name center grey-text text-lighten-4">
          Vin
        </div>
      </Col>
    </Row>
  );
}

export default ContributorList;
