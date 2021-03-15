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
import PrivateRoute from "./Routes/PrivateRoutes";
import PublicRoute from "./Routes/PublicRoutes";
import { UserContext } from "./Components/UserContext";

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
    setToken(token);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    //setToken(null);
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

  /********  
  // Rewrote below to include using previous state in functional setState and 
  // to update prescriptions along with the medications change
  */
  let deleteMedication = (medicationID) => {
    console.log(medicationID, "med id");
    fetch(`${BASE_URL}medications/${medicationID}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedMedication) => {
        setMedications(prevMeds => {
          return prevMeds.filter(med => med.id !== medicationID);
        })
        setPrescriptions(prevPrescriptions => {
          return prevPrescriptions.filter(prescr => prescr.medication.id !== medicationID);
        })
      });
  };

  const handleNewPrescription = (newPrescriptionObj) => {
    fetch(`${BASE_URL}prescriptions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newPrescriptionObj),
    })
      .then((r) => r.json())
      .then(data => { // update locally w/ setPrescriptions
        setPrescriptions(prevPrescriptions => [...prevPrescriptions, data.prescription]);
        setMedications(prevMeds => [...prevMeds, data.prescription.medication]);
      }) // can check created object
      .catch(error => {
        console.log(error.name + ": " + error.message);
        throw error; // or return error message?
      });
  } // end function handleNewPrescription

  return (
    <div className="main-container">
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <div id={loggedIn ? "wrapper" : "no-wrapper"}> {/* If not logged in, don't apply wrapper style */}
        {loggedIn && <Sidebar />} {/* If not logged in, don't show sidebar */}

        <div className="display">
          <UserContext.Provider
            value={{
              token,
              loggedIn,
              medications,
              deleteMedication,
              handleNewPrescription,
              prescriptions,
              profile_pic,
              name,
              handleLogin,
              BASE_URL,
            }}
          >
            <Switch>
              <PublicRoute path="/" children={HomePage} exact />
              <PublicRoute path="/login" children={Login} />
              <PublicRoute path="/signup" children={Register} />
              <PrivateRoute path="/dashboard" children={DashboardPage} />
              <PrivateRoute path="/friends" children={AccountabilityPartners} />
              <PrivateRoute path="/medicine" children={MedicineCabinet} />
              <PrivateRoute path="/addmed" children={AddMedication} />
              <PrivateRoute path="/settings" children={SettingsPage} />
              <PrivateRoute path="/calendar" children={CalendarPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </UserContext.Provider>
        </div>
      </div>
      <div style={{marginBottom: "100px"}}><img src="/spacer.gif" alt="spacer" /></div>
      <Footer />
    </div>
  );
}

export default App;
