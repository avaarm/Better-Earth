import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import CategorySearch from "./components/CategorySearch";
import NewsCard from "./components/NewsCard";
import FootprintHistory from "./components/FootprintHistory";
import ResultCard from "./components/ResultCard";
import FootprintCard from "./components/FootprintCard";
import FooterBar from "./components/FooterBar"



function App() {
  return (

      <div>
        <Nav />
        <CategorySearch />
        <NewsCard />
        <FootprintHistory />
        <ResultCard />
        <FootprintCard />
        <FooterBar />

      </div>

  );
}

export default App;
