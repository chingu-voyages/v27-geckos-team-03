import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MedicineCabinet from "./pages/MedicineCabinet";
import CalendarPage from "./pages/CalendarPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/medicine" component={MedicineCabinet} />
      <Route path="/calendar" component={CalendarPage} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
