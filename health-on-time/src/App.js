import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Pages/HomePage";
import MedicineCabinet from "./Pages/MedicineCabinet";
import CalendarPage from "./Pages/CalendarPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import AccountabilityPartners from "./Pages/Partners";

import { React, useState, useEffect } from "react";
import "./Styles/App.css";
import AddMedication from "./Pages/AddMedication";

function App() {
  const [user, setUser] = useState(null);
  const initialToken = window.localStorage.getItem("token") || null;
  const [token, setToken] = useState(initialToken);
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile_pic, setProfilePic] = useState(null);
  const [name, setName] = useState(null);
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [partners, setPartners] = useState(null);
  const [patients, setPatients] = useState(null);
  const [prescriptions, setPrescriptions] = useState(null);
  const [medications, setMedications] = useState([]);

  let history = useHistory();
  const BASE_URL = "https://health-on-time-api.herokuapp.com/";
  const handleLogin = (data) => {
    const { user, token } = data;
    console.log(user);
    localStorage.token = token;
    setUser(user);
    setProfilePic(user.profile_pic);
    setName(user.name);
    setUserName(user.username);
    setEmail(user.email);
    setPhone(user.phone);
    setPartners(user.partners);
    setPatients(user.patients);
    setPrescriptions(user.prescriptions);
    setMedications(user.medications);
    // setToken(token);
    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    history.push("/");
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
    <>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      {loggedIn && (
        <Sidebar
          profile_pic={profile_pic}
          name={name}
          prescriptions={prescriptions}
        />
      )}
      <div id="mainSection">
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route
            path="/login"
            render={() => (
              <Login handleLogin={handleLogin} BASE_URL={BASE_URL} />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <Register handleLogin={handleLogin} BASE_URL={BASE_URL} />
            )}
          />
          <Route path="/friends" component={AccountabilityPartners} />
          <Route path="/medicine" component={MedicineCabinet} />
          <Route exact path="/addmed" component={AddMedication} />
          <Route exact path="/profile" component={Sidebar} />
          <Route
            path="/calendar"
            render={() => <CalendarPage prescriptions={prescriptions} />}
          />

        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
