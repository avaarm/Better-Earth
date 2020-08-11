import React from "react";
import { Col } from 'react-materialize';
import "./style.css";

function ContributorList() {
    return (
        <div>
            <Col s={12} m={6} l={12}>
              <ul>
                <li>
                  <a href="https://github.com/avaarm">
                    <img
                      alt="armenuhi"
                      className="circle responsive-img"
                      src="https://avatars0.githubusercontent.com/u/48078730?s=400&u=7fe3acb496694f3b0acbfaafac8e640702662920&v=4"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeffreyadamo">
                    <img
                      alt="jeffrey"
                      className="circle responsive-img"
                      src="https://avatars2.githubusercontent.com/u/58490053?s=460&u=984a062d5bb163c29e4e6eca8409375753dde324&v=4"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tymcbrid">
                    <img
                      alt="tyler"
                      className="circle responsive-img"
                      src="https://avatars3.githubusercontent.com/u/36458808?s=460&u=26abef4823d0096a8f9dc4a015bae12c6e7cd055&v=4"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vxmao87">
                    <img
                      alt="vin"
                      className="circle responsive-img"
                      src="https://avatars1.githubusercontent.com/u/61126887?s=460&u=08b64f4263415f36c0a84e5f029677762e663f1b&v=4"
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </div>
    );
}

export default ContributorList;