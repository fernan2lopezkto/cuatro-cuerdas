import React from "react";
import "./TutorialPage.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

function TutorialPage({ tutorial }) {
  return (
    <div>
      <Navbar />
      <h1>{tutorial.name}</h1>
      <p>{tutorial.description}</p>
      
      
        <div className="home-video-container">
            <VideoPlayer url={tutorial.videoURL />
        </div>
          <pre>{tutorial.lyric}</pre>
      <Foot />
    </div>
  );
}

export default TutorialPage;
