import React from "react";
import { Row, Col, Card, Icon, CardTitle} from 'react-materialize';


// anything that is materialize react specific has to be imported


function NewsCard(props) {
  return (
<Row>
  <Col
    m={6}
    s={12}
    l={3}
  >
    <Card
      actions={[
        <a key={props.id} href={props.url}>{props.source}</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={props.urlToImage}>{props.title}</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      {props.description}
    </Card>
  </Col>
</Row>
  );
}

export default NewsCard;
