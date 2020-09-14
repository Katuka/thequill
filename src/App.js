import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components";
import Navigation from "./components/navigation/navigation";
import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/blogs" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
