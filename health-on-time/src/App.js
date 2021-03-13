import { React, useState, useEffect } from "react";
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
import AddMedication from "./Pages/AddMedication";
import SettingsPage from "./Pages/Settings";
import DashboardPage from "./Pages/Dashboard";
import NotFoundPage from "./Pages/NotFoundPage";
import "./Styles/App.css";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

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
  const [medications, setMedications] = useState(null);

  let history = useHistory();
  // const BASE_URL = "http://localhost:3000/";
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
  
  let deleteMedication = (medicationID) => {
    console.log(medicationID, "med id");
    fetch(`${BASE_URL}medications/${medicationID}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedMedication) => {
        let copyOfMeds = medications.filter((med) => {
          return med.id !== medicationID;
        });
        setMedications(copyOfMeds);
      });
  };
  const handleNewPrescription = (newPrescriptionObj) => {
    fetch(`${BASE_URL}prescriptions`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ newPrescriptionObj }),
    })
        .then((r) => r.json())
        .then((createdPrescriptionObj) => { // update locally w/ setPrescriptions
            setPrescriptions([prescriptions, ...createdPrescriptionObj]);
        }) // can check created object
  }
  return (
    <div className="main-container">
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <div id={loggedIn && "wrapper"}>
        {loggedIn && <Sidebar prescriptions={prescriptions} />}
        <div className="display">
          <Switch>
            {loggedIn ? (
              <Route
                path="/"
                render={() => (
                  <DashboardPage profile_pic={profile_pic} name={name} />
                )}
                exact={true}
              />
            ) : (
              <Route path="/" component={HomePage} exact />
            )}

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
            <Route
              path="/medicine"
              render={() => (
                <MedicineCabinet
                  medications={medications}
                  deleteMedication={deleteMedication}
                />
              )}
            />
            {/*
            <Route
              exact path="/addmed"
              component={AddMedication}
              prescriptions={prescriptions}
              medications={medications}
            /> */}
            <Route
              exact path="/addmed"
              render={() => 
              { return (
                prescriptions && medications && localStorage.token ?
                  <AddMedication
                    token={localStorage.token}
                    prescriptions={prescriptions}
                    handleNewPrescription={handleNewPrescription} />
                  : 
                  <p>Loading...</p>
              )}}
            />
            <Route exact path="/settings" component={SettingsPage} />
            <Route
              path="/calendar"
              render={() => <CalendarPage prescriptions={prescriptions} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <div style={{marginBottom: "100px"}}><img src="/spacer.gif" alt="spacer" /></div>
      <Footer />
    </div>
  );
}

export default App;
