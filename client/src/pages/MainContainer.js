import React from "react";
import Nav from "../components/Nav";
import CategorySearch from "../components/CategorySearch";
import NewsAPI from "../components/NewsAPI";
import NewsTab from "../components/NewsAPI/newsTab";
import FootprintCard from "../components/FootprintCard";
import FooterBar from "../components/FooterBar"
import ResultList from "../components/ResultList";

function MainContainer() {
  return (
      <div>
        <Nav />
        {/* <div className="container"> */}
          <CategorySearch /> 
          <ResultList />
          <NewsTab />
          {/* <NewsAPI /> */}
          <FootprintCard />
        {/* </div> */}
        <FooterBar />
      </div>
  );
}

export default MainContainer;