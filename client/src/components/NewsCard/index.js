import React from "react";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";
import "./style.css";


function NewsCard(props) {
  return (
      <div className="col s12 m6 l6">
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
