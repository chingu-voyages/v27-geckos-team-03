import "./App.css";
import React from "react";
import LandingPage from "./components/landingPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
