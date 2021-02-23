import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landingPage from "./pages/landingPage/landingPage";
import searchPage from "./pages/searchPage/searchPage";

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={landingPage} />
            <Route exact path="/search" component={searchPage} />
            {/* <Route exact path="/intro" component={Intro} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} /> */}
          </Switch>
      </div>
    </Router>
    );
  }
  
  
  export default App;
