import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import SelectorTypeTutorials from "../components/SelectorTypeTutorials";
import MaterialExtraComponent from "../components/MaterialExtraComponent";

export default function PistasGallery() {
  const pistaslList = tutorials.map((t) => {
    return (
      t.tutorialType.includes("pista") && (
        <Card
          name={t.title}
          description={t.description}
          path={t.path}
          image={t.image}
        />
      )
    );
  });
  return (
    <>
      <NavBar />
      <SelectorTypeTutorials />
      <section className="Container">
        <h1 className="Container">Tutoriales en modo pista con acordes</h1>
        <div className="containerCards">{pistaslList}</div>
      </section>
      <MaterialExtraComponent />
      <Footer />
    </>
  );
}
