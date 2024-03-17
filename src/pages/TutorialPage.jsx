import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

function TutorialPage({ tutorial }) {
  const [lyrics, setlyrics] = useState("");

  useEffect(() => {
    async function fetchLyrics() {
      try {
        // Fetch para obtener el contenido del archivo de texto
        const response = await fetch("venEspirituSanto_Mi-.txt");
        if (!response.ok) {
          throw new Error("Error al cargar el archivo");
        }
        const textContent = await response.text();
        setlyrics(textContent);
      } catch (error) {
        console.error("Error al cargar el archivo:", error);
      }
    }

    fetchLyrics();
  }, [tutorial]);

  return (
    <div>
      <Navbar />
      <section className="Container">
        <div>
          <h1>{tutorial.name}</h1>
        </div>

        <div className="ContainerS">
          <div className="ElementS">
            <p className="titulesss">{tutorial.description}</p>
            <div className="div">
              <VideoPlayer url={tutorial.videoURL} />
            </div>
          </div>

          <div>
            <pre>{tutorial.lyrics}</pre>
          </div>
        </div>

        <div className="Container">{tutorial.longDescription}</div>
      </section>
      <div className="Container">
        <VideoPlayer url="https://www.youtube.com/watch?v=CnW00jnh7bI" />
        <VideoPlayer url="https://www.youtube.com/watch?v=JhoRz5qHM8U" />
      </div>
      <Foot />
    </div>
  );
}

export default TutorialPage;
