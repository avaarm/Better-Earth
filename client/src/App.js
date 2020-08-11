import React from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import MainContainer from "./pages/MainContainer";
import NewsTab from "./components/NewsAPI/newsTab";
import RegisterLogin from "./PassportJS/registerLogin"
import Register from "./PassportJS/register"
import Nav from "./components/Nav";
import About from "./components/About";
import FootprintCard from "./components/FootprintCard";
import { StoreProvider } from "./utils/GlobalState";


// not all have to be exact paths
function App() {
  return (
    <Router>
      <div>
      <StoreProvider >
        <Route exact path="/">
          <Nav />
          <MainContainer />
          
        </Route>
       
        <Route exact path="/news">
          <Nav />
          <NewsTab />
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
        <Route exact path="/register">
          <Nav />
          <Register />
        </Route>
      </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
