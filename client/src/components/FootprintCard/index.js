import React from "react";
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';

function FootprintCard(props) {
  return (
    <div>
      <Row>
        <Col
          s={12}
          m={6}
          l={3}
          offset="l4"
          pull="l2"
        >
          <Card
            className="card-panel green lighten-2 center-align hoverable"
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://cdn.cnn.com/cnnnext/dam/assets/200630030038-mt-rainier-file-exlarge-169.jpg" reveal waves="light"/>}
            reveal={<p>Carbon footprint information will be populated here.</p>}
            revealIcon={<Icon>more_vert</Icon>}
            title="Your carbon footprint information - click me!"
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
