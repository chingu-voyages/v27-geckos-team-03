import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { React, useState } from "react";
import P from "./components/P.js";
function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path="/login" component={Login}>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path="/register" component={Register}>
          <Register handleLogin={handleLogin} />
        </Route>
        <Route exact path="/P">
          <P user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
