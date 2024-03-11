import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-container">
      <div className="home-general-container">
        <h1>Cuatro Cuerdas</h1>
        <p>Tutoriales</p>
      </div>
      </div>
      <Footer />
    </>
  );
}
