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
          <h2>Your footprint information</h2>
          <blockquote className="black-text">
            <p className="zip-code">Inputted zip code: {result.input_location}</p>
            <p className="population">Population of your area: {result.input_population}</p>
            <p className="house-area">The average living space area of a house in this zip code is {result.input_footprint_housing_squarefeet} square feet.</p>
          </blockquote>
          <span className="black-text">
            <table className="responsive-table striped centered">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Average consumption in household/distance traveled</th>
                  <th>Possible action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Electricity</td>
                  <td>${result.input_footprint_housing_electricity_dollars}/yr or {Math.round(result.input_footprint_housing_electricity_kwh)}kWh/yr</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Transportation</td>
                  <td>${result.input_footprint_transportation_publictrans}mi/yr on public transit,  {result.input_footprint_transportation_airtotal}mi/yr on air travel</td>
                  <td>Carpool to work {result.input_takeaction_carpool_to_work_days} days per month, ride your bike for {result.input_takeaction_ride_my_bike_miles} miles per week, or telecommute to work {result.input_takeaction_telecommute_to_work_days} days per month</td>
                </tr>
                <tr>
                  <td>Shopping</td>
                  <td>${}</td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Waste</td>
                  <td></td>
                  <td>Turn down winter thermostat by {result.input_takeaction_thermostat_winter_daydegrees} degrees during the day and {result.input_takeaction_thermostat_winter_nightdegrees} at night</td>
                </tr>
                <tr>
                  <td>Food</td>
                  <td>{result.result_takeaction_low_carbon_diet_cerealscal} calories for cereal, {result.result_takeaction_low_carbon_diet_dairycal} calories for dairy, {result.result_takeaction_low_carbon_diet_fvcal} calories for fruits and veggies, {result.result_takeaction_low_carbon_diet_meatcal} calories for meat, and {result.result_takeaction_low_carbon_diet_othercal} calories for all other food options, for a total of {result.result_takeaction_low_carbon_diet_totalcal} calories per day</td>
                  <td>For a low-carbon diet, eat less red meat and dairy than listed, and replace with chicken and fruits/veggies</td>
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
