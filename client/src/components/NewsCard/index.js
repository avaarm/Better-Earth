import React from "react";
import "./style.css";

function NewsCard(props) {
  return (
      <div key={props.id} className="col s12 m6 l3">
        <div className="card medium">
          <div className="card-image">
            <img className="imgHeight" alt="" src={props.urlToImage} />
            <span className="card-title">
            <a 
            className="linkColor"
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
            > {props.title}</a>
           </span>
          </div>
          <div className="card-content">
            <p>{props.description}</p>
          </div>
          <div className="card-action">
            <a 
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
            >{props.source}</a>
          </div>
        </div>
      </div>
  );
}

export default NewsCard;
