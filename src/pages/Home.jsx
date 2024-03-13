import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="home-titulo-container">
          <h1>Cuatro Cuerdas</h1>
          <p>Tutoriales</p>
        </div>
        <div className="home-video-container">
          
            <VideoPlayer url="https://www.youtube.com/watch?v=zuFbI7I_-RA" />
          
        </div>
      </div>
      <Footer />
    </>
  );
}
