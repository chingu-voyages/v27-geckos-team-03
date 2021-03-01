import "./App.css";
import React from "react";
import LandingPage from "./Components/landingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

      <Navbar />
      <LandingPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
