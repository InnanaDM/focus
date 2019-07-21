import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Instructions from "./components/Instructions/Instructions.js";
import Card from "./components/Cards/Card.js";

const images = [
  {
    url: "/images/innana.jpg",
    alt: "my beautiful face"
  }
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Instructions />
      {images.map(image => (
        <Card key={image.url}>
          <img src={image.url} height="250" width="250" alt={image.alt} />
        </Card>
      ))}
    </div>
  );
}

export default App;
