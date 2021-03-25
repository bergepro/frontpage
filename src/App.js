import React from "react";
import './App.css';
import './Header.js';
import Header from "./Header";
import { HashRouter as Router, Route, } from "react-router-dom";
import Om from "./Om";
import Prosjekter from "./Prosjekter";
import Main from "./Main";



function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Om">
          <Om/>
        </Route>
        
        <Route path="/Prosjekter">
          <Prosjekter />
        </Route>
      </Router>
    </div>
  );
}
export default App;