import "./TutorialsGallery.css";
import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";


export default function TutorialsGallery() {
  const tutorialList = tutorials.map(t => {
    return <Card title = {t.name} description = {t.description} />
  })
  return (
    <>
      <Navbar />
      <h1>Cuatro Cuerdas</h1>
      <div className="container">
        {tutorialList}
      </div>
      <Footer />
    </>
  );
};
