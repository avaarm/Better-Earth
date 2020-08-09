import React from "react";
import { Row, Col, CardPanel, Select } from "react-materialize";
import "./style.css";

// anything that is materialize react specific has to be imported

function CategorySearch() {
  return (
    <Row className="outerRow">
      <Col s={12}>
        <CardPanel className="outerCard">
          <span className="white-text">
            <h5 className="center">
              Looking for a sustainable alternative to everyday products?
            </h5>
            <br />

            <div>Search below for our recommendations...</div>
            <Row className="innerRow">
              <Col s={12}>
                <Select
                s={12}
                  id="Select-9"
                  multiple
                  options={{
                    classes: "",
                    dropdownOptions: {
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250,
                    },
                  }}
                  value={[""]}
                >
                  <option disabled value="">
                    Select Products :)
                  </option>
                  <option value="1">Kitchen </option>
                  <option value="2">Bathroom</option>
                  <option value="3">Clothing</option>
                  <option value="4">Shoes</option>
                  <option value="5">General House</option>
                  <option value="6">Accessories</option>
                  <option value="7">Storage</option>
                  <option value="8">Outdoor Gear</option>
                </Select>
                <CardPanel className="innerCard">
                  <span className="white-text"></span>
                </CardPanel>
              </Col>
            </Row>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default CategorySearch;
