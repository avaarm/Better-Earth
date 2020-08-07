import React from "react";
import { Row, Col, Card, Icon, Select, Button, CardTitle } from "react-materialize";
import "./style.css";

function FootprintCard(props) {
  return (
    <div>
      <Row>
        <Col s={12} m={6} l={3} offset="s2 m2 l2" pull="s1 m1 l1">
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
            title="Your carbon footprint information - click me!"
            reveal={
              <form>
                <label>
                  Zip Code:
                  <input type="text" name="name" />
                </label>
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
                        Household income
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
                        Number of people in the household
                      </option>
                      <option value="1">Average</option>
                      <option value="2">1 person</option>
                      <option value="3">2 people</option>
                      <option value="4">3 people</option>
                      <option value="5">4 people</option>
                      <option value="6">5 or more people</option>
                    </Select>
                    <Button
  node="button"
  type="submit"
  waves="light"
>
  Submit
  <Icon right>
    send
  </Icon>
</Button>

              </form>
            }
          ></Card>
        </Col>
      </Row>
    </div>
  );
}

export default FootprintCard;
