import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./Pages/HomePage";
import MedicineCabinet from "./Pages/MedicineCabinet";
import CalendarPage from "./Pages/CalendarPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { React, useState } from "react";
import "./Styles/App.css";

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
    history.push("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    history.push("/");
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/login">
        <Login handleLogin={handleLogin} BASE_URL={BASE_URL} />
      </Route>
      <Route exact path="/signup">
        <Register handleLogin={handleLogin} BASE_URL={BASE_URL} />
      </Route>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/medicine" component={MedicineCabinet} />
      <Route path="/calendar" component={CalendarPage} />
      <Footer />
    </BrowserRouter>
  );
}
// import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import MedicineCabinet from "./pages/MedicineCabinet";
// import CalendarPage from "./pages/CalendarPage";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./styles/App.css";

export default App;
