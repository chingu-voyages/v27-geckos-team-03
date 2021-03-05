import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Pages/HomePage";
import MedicineCabinet from "./Pages/MedicineCabinet";
import CalendarPage from "./Pages/CalendarPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

import { React, useState, useEffect } from "react";
import "./Styles/App.css";

function App() {
  const [user, setUser] = useState(null);
  const initialToken = window.localStorage.getItem("token") || null;
  const [token, setToken] = useState(initialToken);
  const [loggedIn, setLoggedIn] = useState(false);

  const BASE_URL = "http://localhost:3000/";
  const handleLogin = (data) => {
    const { user, token } = data;
    console.log(user);
    localStorage.token = token;
    setUser(user);
    // setToken(token);
    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    // history.push("/");
  };
  useEffect(() => {
    if (localStorage.token) {
      fetch(`${BASE_URL}/autologin`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((r) => r.json())
        .then((loggedInUser) => {
          handleLogin(loggedInUser);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, []);

  return (
    <div className="main-container">
  

    <BrowserRouter>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Route exact path="/login">
        <Login handleLogin={handleLogin} BASE_URL={BASE_URL} />
      </Route>
      <Route exact path="/signup">
        <Register handleLogin={handleLogin} BASE_URL={BASE_URL} />
      </Route>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/medicine" component={Sidebar} />
      <Route path="/profile" component={Sidebar} />
      {/* <Route
        path="/app"
        render={(props) => (
          <Sidebar profileImgUrl="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png" />
        )}
        />*/}
      <Footer />
    </BrowserRouter>
    </div> /* end .main-container */
  );
}

export default App;
