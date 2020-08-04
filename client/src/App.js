import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import NewsAPI from "./components/NewsAPI";
// import About from "./pages/About";
// import Signup from "./components/Signup";
import RegisterLogin from "./PassportJS/registerLogin"
import Nav from "./components/Nav";
import About from "./components/About";
import FootprintCard from "./components/FootprintCard";

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
        </Route>
        <Route exact path="/login">
          <Nav />
          <RegisterLogin />
        </Route>
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route path="/signup" component={Signup} /> */}
      </div>
    </Router>
  );
}

export default App;
