import React from "react";
import { HomePage, QuotesPage } from "./Components/Pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/fonts/aleo/style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/quotes" component={QuotesPage} />
    </Router>
  );
}

export default App;
