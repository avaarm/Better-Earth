import React from "react";
import "./style.css";
import earth from "./earth.png";

import { Container, Row, Col, CardTitle, Card, Icon } from "react-materialize";

// Exporting both ProductList and ProductListItem from this file

// ProductList renders a list item
function ProductList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// ProductListItem renders a list item containing data from the product call
function ProductListItem({
  category,
  productName,
  thumbnail,
  title,
  summary,
  href,
}) {
  return (
    <div className="card">
      <div className="container">
        <div className="col s12 m8 l6">
          <div className="card"><a rel="noopener noreferrer" target="_blank">{category}</a>
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={earth}
              />
            </div>   
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {title}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a rel="noopener noreferrer" target="_blank" href={href}>
                  Go to website!:)
                </a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title gray-text text-darken-4">
                {title}
                <i className="material-icons right">close</i>
              </span>
              <p className="summary">{summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { ProductList, ProductListItem };
