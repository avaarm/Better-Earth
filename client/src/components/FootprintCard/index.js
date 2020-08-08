import React from "react";
import {
  Row,
  Col,
  // Card,
  Icon,
  Select,
  Button,
  // CardTitle,
} from "react-materialize";
import "./style.css";

function FootprintCard(props) {
  return (
    <div className="container">
      <form>
        <Row>
          <Col s={12}>
            <div >
              <h4 className="middle">Calculate your carbon footprint</h4>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="zip" s={4} l={4}>
            Zip Code:
          </Col>
          <Col s={7} l={7}>
            <input placeholder="Zip Code" type="text" name="name" />
          </Col>
        </Row>

        <br></br>
        <Row>
          <Col className="zip" s={4} l={4}>
            Household Income:
          </Col>
          <Col s={7} l={7}>
            <Select
              s={12}
              m={12}
              l={12}
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
                Select
              </option>
              <option value="1">Average</option>
              <option value="2">Less than $10,000</option>
              <option value="3">$10,000 to $19,999</option>
              <option value="4">$20,000 to $29,999</option>
              <option value="5">$30,000 to $39,999</option>
              <option value="6">$40,000 to $49,999</option>
              <option value="7">$50,000 to $59,999</option>
              <option value="8">$60,000 to $79,999</option>
              <option value="9">$80,000 to $99,999</option>
              <option value="10">$100,000 to $119,999</option>
              <option value="11">$120,000 or more</option>
            </Select>
          </Col>
        </Row>

        <Row>
          <Col className="zip" s={4} l={4}>
            Number of people in household:
          </Col>
          <Col s={7} l={7}>
            <Select
              s={12}
              m={12}
              l={12}
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
                Select
              </option>
              <option value="0">Average</option>
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5">5 or more people</option>
            </Select>
          </Col>
          <Col s={1} l={3} />
        </Row>
        <br></br>
        <Row>
          <Col s={5} m={5} l={5} />
          <Col s={7} m={7} l={7} >
            <Button node="button" type="submit" waves="light">
              Submit
              <Icon right>send</Icon>
            </Button>
          </Col>
        </Row>
      </form>
      {/* <Row>
        <Col>
          <Card
            className="card-panel orangeCard lighten-2 center-align footprint hoverable"
            closeIcon={<Icon>close</Icon>}
            header={
              <CardTitle
                image="https://cdn.cnn.com/cnnnext/dam/assets/200630030038-mt-rainier-file-exlarge-169.jpg"
                reveal
                waves="light"
              />
            }
            reveal={
              <p className="flow-text">
                Carbon footprint information will be populated here.
              </p>
            }
            revealIcon={<Icon>more_vert</Icon>}
            // title="Your carbon footprint information - click me!"
            reveal={
              <form>
                <Row>
                  <Col s={12}>
                    <h4 className="center">Calculate your carbon footprint</h4>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="zip" s={4} l={4}>
                    Zip Code:
                  </Col>
                  <Col s={7} l={7}>
                    <input placeholder="Zip Code" type="text" name="name" />
                  </Col>
                </Row>

                <br></br>
                <Row>
                  <Col className="zip" s={4} l={4}>
                    Household Income:
                  </Col>
                  <Col s={7} l={7}>
                    <Select
                      s={12}
                      m={12}
                      l={12}
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
                        Select
                      </option>
                      <option value="1">Average</option>
                      <option value="2">Less than $10,000</option>
                      <option value="3">$10,000 to $19,999</option>
                      <option value="4">$20,000 to $29,999</option>
                      <option value="5">$30,000 to $39,999</option>
                      <option value="6">$40,000 to $49,999</option>
                      <option value="7">$50,000 to $59,999</option>
                      <option value="8">$60,000 to $79,999</option>
                      <option value="9">$80,000 to $99,999</option>
                      <option value="10">$100,000 to $119,999</option>
                      <option value="11">$120,000 or more</option>
                    </Select>
                  </Col>
                </Row>

                <Row>
                  <Col className="zip" s={4} l={4}>
                    Number of people in household:
                  </Col>
                  <Col s={7} l={7}>
                    <Select
                      s={12}
                      m={12}
                      l={12}
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
                        Select
                      </option>
                      <option value="0">Average</option>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 or more people</option>
                    </Select>
                  </Col>
                  <Col s={1} l={3} />
                </Row>

                <br></br>
                <br></br>
                <Row>
                  <Col s={6} m={6} l={6} />
                  <Col s={6} m={6} l={6} className="subButton">
                    <Button node="button" type="submit" waves="light">
                      Submittt
                      <Icon right>send</Icon>
                    </Button>
                  </Col>
                </Row>
              </form>
            }
          ></Card>
        </Col>
      </Row> */}
    </div>
  );
}

export default FootprintCard;
