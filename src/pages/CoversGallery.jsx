import Card from "../components/Card";
import tutorials from "../data/tutorials";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function CoversGallery() {
  const coverslList = tutorials.map((t) => {
    return ( t.tutorialType === "cover" &&
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
        <h1 className="Container">Covers</h1>
        <div className="containerCards">{coverslList}</div>
        </section>
      <Footer />
    </>
  );
}
