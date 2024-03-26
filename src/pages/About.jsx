import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="Container">
        <h4>¿Quienes Somos?</h4>
      <h1>Cuatro Cuerdas</h1>
      </div>
      <div className="Container">
      <p>
        Bienvenidos a 4Ctutoriales, en esta página encontraras tutoriales cristianos para distintos instrumentos, al igual que material para que tus ensayos y aprendizaje sea de la mejor manera posible.<br/>
        Estos tutoriales en su mayoría están orientados a músicos que recién comienzan o que lo quieren hacer, la idea es brindarles material y tutoriales explicados de una forma sencilla y fácil,  así tener un punto de apoyo en el cual arrancar, pues hay muchas canciones que son de tremenda bendición,  ministran muchísimo de la presencia de Dios, y a su vez se pueden interpretar en el instrumento de una forma muy fácil y sencilla. <br/>
        Si te interesa te aconsejo suscribirte a mi canal de YouTube y actives la campanita así te avisa  para hacerlo haz clic aquí <br/>
        4C  es por Cuatro Cuerdas, mi instrumento favorito es el bajo y por lo general lo estándar es el de 4 cuerdas
      </p>
      </div>
      <Footer />
    </>
  );
}
