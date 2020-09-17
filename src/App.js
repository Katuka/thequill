import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components";
import Navigation from "./components/navigation/navigation";
import Blog from "./components/blog/blog";
import ScrollToTop from "./scroll";
import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <ScrollToTop>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/blogs" exact>
              <Home />
            </Route>
            <Route path="/blogs/:id" exact>
              <Blog />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </main>
  );
}

export default App;
