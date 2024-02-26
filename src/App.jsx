import Card from "./components/Card";
import "./App.css";
import tutorials from "./data/tutorials";


function App() {

  const tutorialsList = tutorials.map(t => {
    return (<Card title={t.name} description={t.description} />)
  })

  return (
    <>
      <h1>Cuatro Cuerdas</h1>
      <div className="container">
        {tutorialsList}
      </div>
    </>
  );
}

export default App;
