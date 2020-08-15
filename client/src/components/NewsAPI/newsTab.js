import React, { useEffect, useState } from "react";
import { Row, Col, Tabs, Tab } from "react-materialize";
import "./style.css";
import News from "./index";

function NewsTab() {
  const [newsSearch, setNewsSearch] = useState("sustainability");

  useEffect(() => {}, [newsSearch]);

  return (
    <Row>
      <div className="col s12">
        <div className="card-panel">
          <h2 className="backColor">
            <span>
              <i className="material-icons prefix">library_books</i>
            </span>{" "}
            Current Events{" "}
            <span>
              <i className="material-icons prefix">library_books</i>
            </span>
          </h2>

          <Row>
            <Col s={12}>
              <Tabs 
              className="tab-demo z-depth-1"
              onChange={(e) => {
                setNewsSearch(e.target.value);
              }}
              >
                <Tab
                  active
                  options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false,
                  }}
                  title="Sustainability"
                  value="sustainability"
                >
                </Tab>
                <Tab
                 active
                  options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false,
                  }}
                  title="Environment"
                  value="environment"
                >
                </Tab>
                <Tab
                  options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false,
                  }}
                  title="Test 3"
                >
                  Test 3
                </Tab>
                <Tab
                  options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false,
                  }}
                  title="Test 4"
                >
                  Test 4
                </Tab>
              </Tabs>
              <div>
                <ul className="tabs tabs-fixed-width tab-demo z-depth-1">
                  <li key="1" className="tab">
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
                  <li key="2" className="tab">
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
                  <li key="3" className="tab ">
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
                  <li key="4" className="tab">
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
                  <li key="5" className="tab">
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
                <News search={newsSearch} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  );
}

export default NewsTab;
