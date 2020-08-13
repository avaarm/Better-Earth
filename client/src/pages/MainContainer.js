import React, { useEffect, useState, useContext }  from "react";
import CategorySearch from "../components/CategorySearch";
import NewsTab from "../components/NewsAPI/newsTab";
import FootprintCard from "../components/FootprintCard";
import FooterBar from "../components/FooterBar"
import { Col, Row } from "react-materialize";
import ResultList from "../components/ResultList";
import { StoreProvider, useStoreContext } from "../utils/GlobalState";

function MainContainer(props) {
  // const { state, dispatch } = useStoreContext();
  // console.log(state);
  const [name, setName] = useState("");
  const sessionName = sessionStorage.getItem("Name");
  // console.log(state.username)
  useEffect(() => {
    // setName(props.name)
    setName(sessionName)
    console.log(sessionName)
  }, [sessionName]);

  

  return (
    <div>
      {/* {state.username} */}
      {/* When user is directed from /register and logs on, name is passed as a prop */}
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