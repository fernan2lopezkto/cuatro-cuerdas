import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function PistasGallery() {
  const pistaslList = tutorials.map((t) => {
    return ( t.tutorialType === "pista" &&
      <Card
        name={t.name}
        description={t.description}
        path={t.path}
        image={t.image}
      />
    );
  });
  return (
    <>
      <NavBar />
      <section className="Container">
        <h1 className="Container">Tutoriales en modo pista con acordes</h1>
        <div className="containerCards">{pistaslList}</div>
        </section>
      <Footer />
    </>
  );
}
