import React from "react";
import "./TutorialPage.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";

function TutorialPage({ tutorial }) {
  return (
    <div>
      <Navbar />
      <h1>{tutorial.name}</h1>
      <p>{tutorial.description}</p>
      <img src={tutorial.image} alt={tutorial.name + " image"} />
      <Foot />
    </div>
  );
}

export default TutorialPage;
