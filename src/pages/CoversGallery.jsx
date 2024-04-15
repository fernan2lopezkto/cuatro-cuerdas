import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import SelectorTypeTutorials from "../components/SelectorTypeTutorials";
import MaterialExtraComponent from "../components/MaterialExtraComponent";

export default function CoversGallery() {
  const coverslList = tutorials.map((t) => {
    return (
      t.tutorialType === "cover" && (
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
        <h1 className="Container">Covers</h1>
        <div className="containerCards">{coverslList}</div>
      </section>
      <MaterialExtraComponent />
      <Footer />
    </>
  );
}
