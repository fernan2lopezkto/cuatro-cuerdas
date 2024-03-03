import "./App.css";
import Card from "./component/Card";
import tutorials from "./data/tutorials"
import Footer from "./component/Footer";

function App() {
  const tutorialList = tutorials.map(t => {
    return <Card title = {t.name} description = {t.description} />
  })
  return (
    <>
      <h1>Cuatro Cuerdas</h1>
      <div className="container">
        {tutorialList}
      <Footer />
      </div>
    </>
  );
}

export default App;
