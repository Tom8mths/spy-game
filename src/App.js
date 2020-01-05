import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes/index";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  );
}
