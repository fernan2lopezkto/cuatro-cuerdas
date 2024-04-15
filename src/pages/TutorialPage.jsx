import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";
import SelectorTypeTutorials from "../components/SelectorTypeTutorials";
import MaterialExtraComponent from "../components/MaterialExtraComponent";

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
    <>
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

      <SelectorTypeTutorials />
      <MaterialExtraComponent />
      <Foot />
    </>
  );
}

export default TutorialPage;
