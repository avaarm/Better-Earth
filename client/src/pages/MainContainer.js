import React, { useEffect, useState }  from "react";
import CategorySearch from "../components/CategorySearch";
import NewsTab from "../components/NewsAPI/newsTab";
import ResultCard from "../components/ResultCard";
import FootprintCard from "../components/FootprintCard";
import FooterBar from "../components/FooterBar"
import { Col, Row } from "react-materialize";

function MainContainer(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.name)
  }, [name]);

  return (
      <div>
        <Row>
          <Col>
            <h2 className="center">Welcome {props.name ? (`${name}`):("to Better Earth!")}</h2>
          </Col>
        </Row>
        {/* <div className="container"> */}
          <CategorySearch /> 
          <ResultCard />
          <NewsTab />
          {/* <NewsAPI /> */}
          <FootprintCard />
        {/* </div> */}
        <FooterBar />
      </div>
  );
}

export default MainContainer;