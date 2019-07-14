import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Instructions from "./components/Instructions/Instructions";
import Cards from "../src/components/Cards/Cards.js";
// import info from './info.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Instructions />
      <Cards />
    </div>
  );
}

export default App;
