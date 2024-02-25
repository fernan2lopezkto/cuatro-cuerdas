import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Cuatro Cuerdas</h1>
      <Card />
    </>
  );
}

export default App;
