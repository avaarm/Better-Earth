import React from "react";
import { Row, Col, CardPanel } from 'react-materialize';
import "./style.css";

function FootprintHistory(props) {

  const result = props.data;
  return (
    <Row>
      <Col
        l={12}
        m={12}
        s={12}
      >
        <CardPanel className="orangeCard">
          <span className="black-text">
            <p className="zip-code">Inputted zip code: {result.input_location}</p>
            <p className="population">Population of your zip code: {result.input_population}</p>
            <p className="house-area">The average living space area of a house in this zip code is {result.input_footprint_housing_squarefeet} square feet.</p>
          </span>
          <span className="black-text">
            <table className="responsive-table striped">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Average consumption in household</th>
                  <th>Possible action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Electricity</td>
                  <td>${result.input_footprint_housing_electricity_dollars}, or {Math.round(result.input_footprint_housing_electricity_kwh)} kWh per year</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Electricity</td>
                  <td>${result.input_footprint_housing_electricity_dollars}, or {Math.round(result.input_footprint_housing_electricity_kwh)} kWh per year</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Electricity</td>
                  <td>${result.input_footprint_housing_electricity_dollars}, or {Math.round(result.input_footprint_housing_electricity_kwh)} kWh per year</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Electricity</td>
                  <td>${result.input_footprint_housing_electricity_dollars}, or {Math.round(result.input_footprint_housing_electricity_kwh)} kWh per year</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Electricity</td>
                  <td>${result.input_footprint_housing_electricity_dollars}, or {Math.round(result.input_footprint_housing_electricity_kwh)} kWh per year</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
              </tbody>
            </table>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default FootprintHistory;
