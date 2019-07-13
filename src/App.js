import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Instructions from "./components/Instructions/Instructions";
// import info from './info.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Instructions />
    </div>
  );
}

export default App;
