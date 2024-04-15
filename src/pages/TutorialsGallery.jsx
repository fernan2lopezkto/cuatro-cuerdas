import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import SelectorTypeTutorials from "../components/SelectorTypeTutorials";
import MaterialExtraComponent from "../components/MaterialExtraComponent";

export default function TutorialsGallery() {
  const tutorialList = tutorials.map((t) => {
    return (
      t.tutorialType === "explicacion" && (
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
        <h1 className="Container">Tutoriales con explicacion</h1>
        <div className="containerCards">{tutorialList}</div>
      </section>
      <MaterialExtraComponent />
      <Footer />
    </>
  );
}
