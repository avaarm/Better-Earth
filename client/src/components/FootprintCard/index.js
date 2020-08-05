import React from "react";
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import "./style.css";

function FootprintCard(props) {
  return (
    <div>
      <Row>
        <Col
          s={12}
          m={6}
          l={3}
          offset="s2 m2 l2"
          pull="s1 m1 l1"
        >
          <Card
            className="card-panel orangeCard lighten-2 center-align footprint hoverable"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://cdn.cnn.com/cnnnext/dam/assets/200630030038-mt-rainier-file-exlarge-169.jpg" reveal waves="light"/>}
            reveal={<p className="flow-text">Carbon footprint information will be populated here.</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title="Your carbon footprint information - click me!"
            reveal={<form>
              <label>
                Zip Code:
                <input type="text" name="name" />
              </label>
              
            </form>}
          >
          {/* <p>
            <a href="#">
              This is a link
            </a>
          </p> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FootprintCard;
