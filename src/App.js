import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/index";

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
