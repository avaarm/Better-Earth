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
            <h5 className="center">Looking for a sustainable alternative to everyday products?</h5>
            <br />

            <div>
            Search below for our recommendations... 
              </div> 
            <Row className="innerRow">
              <Col s={12}>                    <Select
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
                      <option value="1">Dish soap</option>
                      <option value="2">Clothing</option>
                      <option value="3">Hand Soap</option>
                      <option value="4">Shoes</option>
                      <option value="5">Straws</option>
                      <option value="6">Makeup Remover</option>
                      <option value="7">Sponges</option>
                      <option value="8">Storage Containers</option>
                      <option value="9">Dryer Balls</option>
                      <option value="10">Produce Bags</option>
                      <option value="11">Food Storage Bags</option>
                      <option value="12">Water Bottle</option>
                      <option value="13">Napkins</option>
                    </Select>
                <CardPanel className="innerCard">
                  <span className="white-text">

                  </span>
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