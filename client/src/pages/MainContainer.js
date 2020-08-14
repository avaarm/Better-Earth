import React, { useEffect, useState }  from "react";
import CategorySearch from "../components/CategorySearch";
import NewsTab from "../components/NewsAPI/newsTab";
import FootprintCard from "../components/FootprintCard";
import { Col, Row } from "react-materialize";
import ResultList from "../components/ResultList";

function MainContainer() {
  const [name, setName] = useState("");
  const sessionName = sessionStorage.getItem("Name");
  useEffect(() => {
    setName(sessionName)
  }, [sessionName]);

  return (
    <div>
      <Row>
        <Col
        s={12}>
          <h2 className="center">
            Welcome {name ? (`${name}`):("to Better Earth!")}
          </h2>
        </Col>
      </Row>
      <CategorySearch /> 
      <ResultList />
      <NewsTab />
      <FootprintCard />
    </div>
  );
}

export default MainContainer;