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
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const BASE_URL = "http://localhost:3000/";
  // const history = useHistory();
  const handleLogin = (data) => {
    const { user, token } = data;
    console.log(user);
    localStorage.token = token;
    setUser(user);

    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    // history.push("/");
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

export default App;
