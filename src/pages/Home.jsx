import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <sect className="columContainer">
        <div className="container">
          <div className="columContainer">
            <div>
              <h1>Cuatro Cuerdas</h1>
              <p>Tutoriales</p>
            </div>
          </div>
          <div className="container">
            <VideoPlayer url="https://www.youtube.com/watch?v=YKM5qWuOObA" />
          </div>
        </div>
      </sect>
      <Footer />
    </>
  );
}
