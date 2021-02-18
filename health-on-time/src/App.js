import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import MedicineCabinet from "./Pages/MedicineCabinet";
import CalendarPage from "./Pages/CalendarPage";
import "./Styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/medicine" component={MedicineCabinet} />
      <Route path="/calendar" component={CalendarPage} />
    </BrowserRouter>
  );
};

export default App;
