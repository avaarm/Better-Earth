import React from "react";
import { Row, Col, Card, Icon, CardTitle} from 'react-materialize';
import "./style.css"


// anything that is materialize react specific has to be imported
    {/* <Row>
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
</Row> */}

function NewsCard(props) {
  return (
    <div className="col s12 m6 l4">
      <div className="card small">
          <div className="card-image">
            <img src={props.urlToImage} />
            <span className="card-title">{props.title}</span>
          </div>
          <div className="card-content">
            <p>{props.description}</p>
          </div>
          <div className="card-action">
            <a href={props.url}>{props.source}</a>
          </div>
        </div>
    </div>        
  );
}

export default NewsCard;
