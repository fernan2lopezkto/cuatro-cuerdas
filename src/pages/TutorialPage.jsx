import React from "react";
import { useEffect, useState } from 'react';
import "./TutorialPage.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

function TutorialPage({ tutorial }) {

  const [lyrics, setlyrics] = useState('');

  useEffect(() => {
    async function fetchLyrics() {
      try {
        // Fetch para obtener el contenido del archivo de texto
        const response = await fetch("venEspirituSanto_Mi-.txt");
        if (!response.ok) {
          throw new Error('Error al cargar el archivo');
        }
        const textContent = await response.text();
        setlyrics(textContent);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    }

    fetchLyrics();
  }, [tutorial]);
    
  return (
    <div className="tutorialPage">
      <Navbar />
        <div className="tutorialPage-container">
      <h1>{tutorial.name}</h1>
      <p>{tutorial.description}</p>
      
      
<div >            
  <VideoPlayer url={tutorial.videoURL} />
        </div>
          <div>
              <pre>{tutorial.lyrics}</pre>
          </div>
          <div>{tutorial.longDescription}</div>
</div>
      <Foot />
    </div>
  );
}

export default TutorialPage;
