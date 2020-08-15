import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import NewsTab from "./components/NewsAPI/newsTab";
import RegisterLogin from "./PassportJS/registerLogin"
import Register from "./PassportJS/register"
import Nav from "./components/Nav";
import Logout from "./PassportJS/logout";
import About from "./components/About";
import FootprintCard from "./components/FootprintCard";
import { StoreProvider } from "./utils/GlobalState";
import FooterBar from "./components/FooterBar";
import "./style.css";
import { Col } from "react-materialize";
import backgroundImage from "./components/Images/sky.png"

// not all have to be exact paths
function App() {
  return (
    <div className="background">
      <Router >
        <Nav />
        <StoreProvider >
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/news" component={NewsTab} />
          <Route exact path="/about" component={About} />
          <Route exact path="/footprintCard" component={FootprintCard} />
          <Route exact path="/login" component={RegisterLogin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
        </StoreProvider>
        <FooterBar />
      </Router>
      </div>

  );
}

export default App;
