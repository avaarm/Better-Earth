import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import CategorySearch from "../components/CategorySearch";
import NewsAPI from "../components/NewsAPI";
import FootprintHistory from "../components/FootprintHistory";
import ResultCard from "../components/ResultCard";
import FootprintCard from "../components/FootprintCard";
import FooterBar from "../components/FooterBar"



function MainContainer() {
  return (

      <div>
        <Nav />
        <CategorySearch /> 
        <ResultCard />
        <NewsAPI />
        {/* <FootprintHistory /> */}
        <FootprintCard />
        <FooterBar />

      </div>

  );
}

export default MainContainer;