import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function AllTutorialsGallery() {
  const tutorialList = tutorials.map((t) => {
    return (
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
        <h1 className="Container">Tutoriales</h1>
        <div className="containerCards">{tutorialList}</div>
        </section>
      <Footer />
    </>
  );
}
