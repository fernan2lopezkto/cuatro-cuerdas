import React from "react";
import { useEffect, useState } from 'react';
import "./TutorialPage.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

function TutorialPage({ tutorial }) {

  function LyricsComponent({ tutorial }) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    async function fetchLyrics() {
      try {
        // Importar el contenido del archivo de texto
        const { default: textContent } = await import(tutorial.path);
        setLyrics(textContent);
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    }

    fetchLyrics();
  }, [tutorial]);
    
  return (
    <div>
      <Navbar />
      <h1>{tutorial.name}</h1>
      <p>{tutorial.description}</p>
      
      
        <div className="home-video-container">
            <VideoPlayer url={tutorial.videoURL} />
        </div>
          <div>
              <pre>{lyric}</pre>
          </div>
          <div>{tutorial.longDescription}</div>
      <Foot />
    </div>
  );
}

export default TutorialPage;
