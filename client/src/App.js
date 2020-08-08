import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import NewsAPI from "./components/NewsAPI";
import RegisterLogin from "./PassportJS/registerLogin"
import Register from "./PassportJS/register"
import Nav from "./components/Nav";
import About from "./components/About";
import FootprintCard from "./components/FootprintCard";
import FootprintHistory from "./components/FootprintHistory";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/news">
          <Nav />
          <NewsAPI />
        </Route>
        <Route exact path="/about">
          <Nav />
          <About />
        </Route>
        <Route exact path="/footprintCard">
          <Nav />
          <FootprintCard />
          <FootprintHistory />
        </Route>
        <Route exact path="/login">
          <Nav />
          <RegisterLogin />
        </Route>
        <Route exact path="/register">
          <Nav />
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
