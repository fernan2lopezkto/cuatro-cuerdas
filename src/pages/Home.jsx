import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="Container">
        <div className="Container">
          <div className="Element">
            <h1>Cuatro Cuerdas</h1>
            <p>Tutoriales</p>
          </div>
          <div className="Element">
            <VideoPlayer url="https://www.youtube.com/watch?v=YKM5qWuOObA" />
          </div>
        </div>
        <div className="Container">
          <p>
            4.C. un lugar de ayuda para los que recién comienzan en su llamado a
            servir a Dios a trabes de la música
          </p>
        </div>
        <div className="Container">
          <VideoPlayer url="https://www.youtube.com/watch?v=CnW00jnh7bI" />
          <VideoPlayer url="https://www.youtube.com/watch?v=JhoRz5qHM8U" />
        </div>
      </section>
      <Footer />
    </>
  );
}
