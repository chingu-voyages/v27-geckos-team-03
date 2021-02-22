import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { React, useState } from "react";
import P from "./components/P.js";
function App() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const BASE_URL = "http://localhost:3000/";
  const handleLogin = (data) => {
    const { user, token } = data;
    console.log(user);
    localStorage.token = token;
    setUser(user);
    setLoggedIn(true);
    history.push("/P");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    history.push("/");
  };

  return (
    <div className="container mt-3">
      <Switch>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} BASE_URL={BASE_URL} />
        </Route>
        <Route exact path="/register">
          <Register handleLogin={handleLogin} BASE_URL={BASE_URL} />
        </Route>
        <Route exact path="/P">
          <P user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
