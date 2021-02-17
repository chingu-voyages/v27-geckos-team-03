import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import MedicineCabinet from "./Pages/MedicineCabinet";
import "./Styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" component={Home} exact={true} />
      <Route path="/medicine" component={MedicineCabinet} />
    </BrowserRouter>
  );
};

export default App;
