import React from "react";
import { Row, Col, CardPanel } from "react-materialize";

// anything that is materialize react specific has to be imported

function CategorySearch() {
  return (
    <Row className="outerRow">
      <Col m={6} s={12}>
        <CardPanel className="outerCard">
          <span className="white-text">
            <Row className="innerRow">
              <Col m={6} s={12}>
                <CardPanel className="innerCard">
                  <span className="white-text">
                    <Select
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
                        Choose your option
                      </option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </Select>
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
