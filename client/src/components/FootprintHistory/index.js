import React from "react";
import { Row, Col, CardPanel } from 'react-materialize';
import "./style.css";

function FootprintHistory(props) {

  return (
    <Row>
      <Col
        l={12}
        m={12}
        s={12}
      >
        <CardPanel className="orangeCard">
          <span className="black-text">
            <p className="location">You chose: {props.data.input_location}</p>
            <p className="size">The size of your household: {props.data.input_size}</p>
            <p className="population">Population of your zip code: {props.data.input_population}</p>
            <p className="mode">Type of location chosen: {props.data.input_location_mode}</p>
            <p className="income">Income: {props.data.input_income}</p>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default FootprintHistory;
