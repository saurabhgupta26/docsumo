import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Switch>
            <Route
              render={() => <Login setUserData={setUserData} />}
              path="/"
              exact
            />
            <Route
              render={() => <Dashboard userData={userData} />}
              path="/dashboard"
              exact
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
