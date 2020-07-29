import React from "react";
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';


// anything that is materialize react specific has to be imported


function FootprintCard() {
  return (
<Row>
  <Col
    l={1}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Card Title"
    >
      <p>
        <a href="#">
          This is a link
        </a>
      </p>
    </Card>
  </Col>
</Row>
  );
}

export default FootprintCard;
