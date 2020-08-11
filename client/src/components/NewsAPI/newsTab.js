import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import "./style.css";
import News from "./index"

function NewsTab() {
  const [newsSearch, setNewsSearch] = useState("climatechange");

  useEffect(() => {
    console.log(newsSearch);
  }, [newsSearch]);

  return (
    <Row>
     <Col>
       <div className="card-panel">
        <h3 className="backColor">Current Events</h3>


    <div>
      <ul className="tabs tabs-fixed-width tab-demo z-depth-1">
        <li 
        key="1"
        className="tab">
          <a
            className="active"
            href="#test1"
            onClick={(e) => {
              setNewsSearch("environment");
            }}
          >
            Environmental
          </a>
        </li>
        <li 
        key="2"
        className="tab">
          <a
            className="active"
            href="#test2"
            onClick={(e) => {
              setNewsSearch("sustainability");
            }}
          >
            Sustainability
          </a>
        </li>
        <li
        key="3"
        className="tab ">
          <a
            className="active"
            href="#test3"
            onClick={(e) => {
              setNewsSearch("climatechange");
            }}
          >
            Climate Change
          </a>
        </li>
        <li 
        key="4"
        className="tab">
          <a
            className="active"
            href="#test4"
            onClick={(e) => {
              setNewsSearch("charity");
            }}
          >
            Charitable
          </a>
        </li>
        <li
        key="5"
        className="tab">
          <a
            className="active"
            href="#test0"
            onClick={(e) => {
              setNewsSearch("world");
            }}
          >
            World
          </a>
        </li>
      </ul>
      <br />
      <News
        search= {newsSearch}
        />
    </div>
    </div>
    </Col>
    </Row>
    
  );
}

export default NewsTab;
