import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/index";

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="https://mikdermit.github.io/flashcard-app/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
