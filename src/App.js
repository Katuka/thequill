import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import Home from "./components";
import Navigation from "./components/navigation/navigation";
import Blog from "./components/blog/blog";
import ScrollToTop from "./scroll";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Signup from "./components/auth/signup/signup";
import Signin from "./components/auth/signin/signin";

function App() {
  // const path = useParams();
  // console.log(path);
  return (
    <main>
      <Router>
        <ScrollToTop>
          {/* {path === "/blogs/:id" ? <Navigation /> : null} */}
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blogs/:id" exact>
              <Blog />
            </Route>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/auth/signup" exact>
              <Signup />
            </Route>
            <Route path="/auth/signin" exact>
              <Signin />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </main>
  );
}

export default App;
