import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Teaching from "./pages/teaching";
import Projects from "./pages/projects";
import Project from "./components/project";
import Datascience from "./pages/datascience";
import Webdev from "./pages/webdev";
import QLearning from "./pages/qlearning";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Deeplearning from "./pages/deeplearning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/teaching">
            <Teaching />
          </Route>
          <Route exact path="/webdev">
            <Webdev />
          </Route>
          <Route exact path="/qlearning">
            <QLearning />
          </Route>
          <Route exact path="/datascience">
            <Datascience />
          </Route>
          <Route exact path="/deeplearning">
            <Deeplearning />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
