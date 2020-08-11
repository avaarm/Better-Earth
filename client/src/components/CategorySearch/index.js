import React from "react";
import { Row, Col, CardPanel, Select, Button } from "react-materialize";
import "./style.css";
// import { StoreProvider, useStoreContext } from "../../utils/GlobalState";

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
              <Col s={10}>
                <Select
                  s={12}
                  id="prod-type"
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
                    Select A Category of Products :)
                  </option>
                  <option value="1">Accessories</option>
                  <option value="2">Bathroom</option>
                  <option value="3">Clothing</option>
                  <option value="4">Shoes</option>
                  <option value="5">General House Goods</option>
                  <option value="6">Kitchen</option>
                  <option value="7">Storage</option>
                  <option value="8">Outdoor Gear</option>
                  <option value="9">Other</option>
                </Select>

                <CardPanel className="innerCard">
                  <span className="white-text"></span>
                </CardPanel>
                <Button
                  node="button"
                  style={{
                    marginRight: "5px",
                  }}
                  waves="light"
                >
                  Search
                </Button>
              </Col>
            </Row>
          </span>
        </CardPanel>
      </Col>
    </Row>
  );
}

export default CategorySearch;
