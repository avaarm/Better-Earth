import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
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
              <div>
                <ul className="tabs">
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

        </div>
      </div>
    </Row>
  );
}

export default NewsTab;
